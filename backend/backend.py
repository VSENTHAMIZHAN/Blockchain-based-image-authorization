from flask import Flask, request, jsonify
from web3 import Web3
import json, hashlib
from flask_cors import CORS

# Initialize Flask app and CORS
app = Flask(__name__)
CORS(app, origins=["http://localhost:3000"])  # Allow frontend to connect

# Connect to local blockchain
web3 = Web3(Web3.HTTPProvider('http://127.0.0.1:8545'))

# Load ABI
with open('ImageAuthABI.json', 'r') as f:
    abi = json.load(f)

contract_address = web3.to_checksum_address('0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0')  # Replace with your contract address
contract = web3.eth.contract(address=contract_address, abi=abi)

sender_address = '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'  # Replace with one from Hardhat
private_key = '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'  # Replace with its private key

@app.route('/upload', methods=['POST'])
def upload_image():
    try:
        file = request.files['image']
        metadata = request.form.get('metadata', '')
        image_bytes = file.read()
        image_hash = hashlib.sha256(image_bytes).hexdigest()

        nonce = web3.eth.get_transaction_count(sender_address)
        txn = contract.functions.registerImage(image_hash, metadata).build_transaction({
            'from': sender_address,
            'nonce': nonce,
            'gas': 2000000,
            'gasPrice': web3.to_wei('20', 'gwei')
        })

        signed_txn = web3.eth.account.sign_transaction(txn, private_key=private_key)
        tx_hash = web3.eth.send_raw_transaction(signed_txn.raw_transaction)
        receipt = web3.eth.wait_for_transaction_receipt(tx_hash)

        return jsonify({
            'hash': image_hash,
            'tx_hash': tx_hash.hex(),
            'status': 'registered',
            'metadata': metadata
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/verify', methods=['POST'])
def verify_image():
    try:
        image_hash = request.json.get('hash')
        verified, timestamp, metadata = contract.functions.verifyImage(image_hash).call()
        return jsonify({'verified': verified, 'timestamp': timestamp, 'metadata': metadata})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
