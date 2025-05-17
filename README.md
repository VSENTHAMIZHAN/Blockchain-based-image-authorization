
# Blockchain Image Authentication System

A decentralized image verification platform that uses blockchain to store and validate image authenticity. This project is ideal for press images, political events, or official media to combat misinformation and tampering.

- Works locally without real tokens or testnet access  
- Powered by Solidity, Flask, and React

---

## Features

- Upload images with metadata to a smart contract  
- SHA256 hash used as the unique fingerprint of each image  
- Image hash and metadata are stored immutably on a local blockchain  
- Verify any image by comparing its hash to the stored value  
- Prevents re-uploads of the same image (duplicate hash detection)  
- Clean user interface with real-time feedback and hash preview  

---

## Tech Stack

| Layer         | Technology               |
|---------------|--------------------------|
| Frontend      | React, Axios, CSS        |
| Backend       | Flask, Web3.py           |
| Smart Contract| Solidity                 |
| Blockchain    | Local Hardhat Node       |
| Tools         | Metamask (optional), IPFS (future), SHA256 Hashing |

---

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/blockchain-image-auth.git
cd blockchain-image-auth
```

### 2. Start Local Blockchain

```bash
npx hardhat node
```

**Note:** Keep this terminal running. Open a new terminal window for the next step.

### 3. Deploy Smart Contract

```bash
npx hardhat run scripts/deploy.js --network localhost
```



### 4. Backend Setup

Copy the contents of .env.example to backend/.env, or alternatively, select a sender address and its corresponding private key from the accounts provided by the Hardhat terminal.

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python backend.py
```

**Note:** Keep this terminal running. Open a new terminal window for the next step.

### 5. Frontend Setup

```bash
cd frontend
npm install
npm start
```

You can access your website from your browser at http://127.0.0.1:3000

---

## Demo Flow

1. Select an image and enter metadata (e.g., Photographer ID, Location).
2. Click **Upload**. The backend:
   - Computes the SHA256 hash of the image.
   - Sends the hash and metadata to the smart contract.
3. Displays confirmation and transaction hash.
4. Click **Verify** to check if the uploaded image is authentic or tampered.

---

## Improvements in Progress

- Status messages for upload and verification steps  
- Duplicate image check via smart contract  
- Enhanced UI with blue/yellow color theme  
- Drag-and-drop image upload support  
- Export metadata as `.json` file  
- Local hash history using browser storage  
- Future support for IPFS image storage  

---

## Author

**Senthamizhan**  and HEISENBERG Team (III year Engineering Students)


