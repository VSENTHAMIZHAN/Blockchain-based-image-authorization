from flask import Flask, request, jsonify
from web3 import Web3
import json, hashlib, pickle
from flask_cors import CORS
import sqlite3
import os
import cv2
import imagehash
from PIL import Image
import numpy as np
from dotenv import load_dotenv
from sklearn.metrics.pairwise import cosine_similarity



app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])

class MorphDetector:
    def __init__(self):
        self.phash_threshold = 8  # more strict
        self.orb_similarity_threshold = 0.85  # cosine similarity

    def preprocess_image(self, image_path):
        img = cv2.imread(image_path)
        if img is None:
            return None
        img = cv2.resize(img, (256, 256))
        gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        return gray

    def get_phash(self, image_path):
        with Image.open(image_path) as img:
            img = img.convert("L").resize((64, 64))
            return imagehash.phash(img)

    def get_orb_features(self, image_path):
        img = self.preprocess_image(image_path)
        if img is None:
            return None
        orb = cv2.ORB_create()
        kp, des = orb.detectAndCompute(img, None)
        return des

    def orb_cosine_similarity(self, des1, des2):
        if des1 is None or des2 is None:
            return 0
        try:
            mean1 = np.mean(des1, axis=0).reshape(1, -1)
            mean2 = np.mean(des2, axis=0).reshape(1, -1)
            return float(cosine_similarity(mean1, mean2)[0][0])
        except:
            return 0

    def is_morph(self, new_img_path, existing_phash, existing_des):
        new_phash = self.get_phash(new_img_path)
        phash_diff = new_phash - existing_phash
        if phash_diff < self.phash_threshold:
            new_des = self.get_orb_features(new_img_path)
            similarity = self.orb_cosine_similarity(existing_des, new_des)
            print(f"[DEBUG] pHash diff: {phash_diff}, ORB similarity: {similarity}")
            return similarity > self.orb_similarity_threshold
        return False

morph_detector = MorphDetector()

web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))
with open('ImageAuthABI.json', 'r') as f:
    abi = json.load(f)
contract_address = web3.to_checksum_address('0x5FbDB2315678afecb367f032d93F642f64180aa3')
contract = web3.eth.contract(address=contract_address, abi=abi)

load_dotenv()  # Looks for .env in the same directory

sender_address = os.getenv("SENDER_ADDRESS")
if not sender_address:
    raise EnvironmentError("[ERROR] SENDER_ADDRESS not found in .env file!")
else:
    print("[DEBUG] SENDER_ADDRESS loaded successfully:", sender_address)

private_key = os.getenv("PRIVATE_KEY")

if not private_key:
    raise EnvironmentError("[ERROR] PRIVATE_KEY not found in .env file!")
else:
    print("[DEBUG] PRIVATE_KEY loaded successfully")


DB_PATH = 'metadata.db'
def init_db():
    with sqlite3.connect(DB_PATH) as conn:
        conn.execute("DROP TABLE IF EXISTS images")
        conn.execute('''CREATE TABLE IF NOT EXISTS images (
                            hash TEXT PRIMARY KEY,
                            metadata TEXT,
                            timestamp INTEGER,
                            tx_hash TEXT,
                            phash TEXT,
                            orb_features BLOB,
                            is_morph BOOLEAN
                        )''')
        print("Database initialized")

init_db()

def save_temp_file(file):
    temp_dir = 'temp_uploads'
    os.makedirs(temp_dir, exist_ok=True)
    temp_path = os.path.join(temp_dir, file.filename)
    file.save(temp_path)
    return temp_path

@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image provided'}), 400

        file = request.files['image']
        metadata = request.form.get('metadata', '')
        temp_path = save_temp_file(file)

        with open(temp_path, 'rb') as f:
            image_bytes = f.read()
            image_hash = hashlib.sha256(image_bytes).hexdigest()

        phash = morph_detector.get_phash(temp_path)
        orb_features = morph_detector.get_orb_features(temp_path)

        is_morph = False
        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT hash FROM images WHERE hash=?", (image_hash,))
            if cursor.fetchone():
                os.remove(temp_path)
                return jsonify({'error': 'Image already registered'}), 400

            cursor.execute("SELECT phash, orb_features FROM images")
            for existing_phash_str, existing_orb_blob in cursor.fetchall():
                existing_phash = imagehash.hex_to_hash(existing_phash_str)
                existing_des = pickle.loads(existing_orb_blob) if existing_orb_blob else None

                if morph_detector.is_morph(temp_path, existing_phash, existing_des):
                    is_morph = True
                    break

        nonce = web3.eth.get_transaction_count(sender_address)
        txn = contract.functions.registerImage(
            image_hash,
            metadata,
            str(phash),
            str(orb_features.mean()) if orb_features is not None else ""
        ).build_transaction({
            'from': sender_address,
            'nonce': nonce,
            'gas': 2000000,
            'gasPrice': web3.to_wei('20', 'gwei')
        })

        signed_txn = web3.eth.account.sign_transaction(txn, private_key=private_key)
        tx_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
        receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

        with sqlite3.connect(DB_PATH) as conn:
            conn.execute(
                "INSERT INTO images VALUES (?, ?, ?, ?, ?, ?, ?)",
                (image_hash, metadata, receipt['blockNumber'], 
                 tx_hash.hex(), str(phash), 
                 pickle.dumps(orb_features) if orb_features is not None else None,
                 is_morph)
            )

        os.remove(temp_path)

        return jsonify({
            'hash': image_hash,
            'tx_hash': tx_hash.hex(),
            'status': 'registered',
            'metadata': metadata,
            'is_morph': is_morph,
            'message': 'Potential morph detected' if is_morph else 'New image registered'
        })

    except Exception as e:
        print("Upload failed:", str(e))
        return jsonify({'error': str(e)}), 500

@app.route('/verify', methods=['POST'])
def verify_image():
    try:
        data = request.get_json()
        image_hash = data.get('hash')
        verified, timestamp, metadata, is_morph = contract.functions.verifyImage(image_hash).call()

        with sqlite3.connect(DB_PATH) as conn:
            cursor = conn.cursor()
            cursor.execute("SELECT * FROM images WHERE hash=?", (image_hash,))
            local_data = cursor.fetchone()

        return jsonify({
            'verified': verified,
            'timestamp': timestamp,
            'metadata': metadata,
            'is_morph': is_morph,
            'local_data': {
                'exists': local_data is not None,
                'metadata': local_data[1] if local_data else None
            }
        })
    except Exception as e:
        print("Verification failed:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
