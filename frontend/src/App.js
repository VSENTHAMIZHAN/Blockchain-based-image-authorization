import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [verificationData, setVerificationData] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleMetadataChange = (e) => setMetadata(e.target.value);

  const handleUpload = async () => {
    if (!file || !metadata) {
      return alert('📢 Please select an image and enter metadata!');
    }

    setStatusMessage('⏳ Uploading...');
    const formData = new FormData();
    formData.append('image', file);
    formData.append('metadata', metadata);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(res.data);
      setStatusMessage('✅ Upload Success');
    } catch (err) {
      setStatusMessage('❌ Upload Error');
      alert(err.response?.data?.error || 'Upload failed');
      console.error('Upload error:', err);
    }
  };

  const handleVerify = async () => {
    if (!result?.hash) {
      return alert('No uploaded image hash to verify!');
    }

    try {
      const verifyRes = await axios.post('http://localhost:5000/verify', {
        hash: result.hash,
      });

      if (verifyRes.data.verified) {
        setVerificationData(verifyRes.data);
        alert(`✅ Verified!\nMetadata: ${verifyRes.data.metadata}`);
      } else {
        alert('❌ Image not found or tampered!');
      }
    } catch (err) {
      alert('❌ Verification failed');
      console.error('Verification error:', err);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🛡️ Blockchain Image Auth</h2>

      <input type="file" onChange={handleFileChange} />
      <br />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          style={{ marginTop: '10px', maxWidth: '300px', border: '1px solid #ccc' }}
        />
      )}
      <br />
      <input
        type="text"
        placeholder="Enter Metadata"
        value={metadata}
        onChange={handleMetadataChange}
        style={{ marginTop: '10px', padding: '5px', width: '300px' }}
      />
      <br />
      <button onClick={handleUpload} style={{ marginTop: '10px', marginRight: '10px' }}>
        Upload
      </button>
      <button onClick={handleVerify} disabled={!result}>
        Verify Image
      </button>

      {statusMessage && <p style={{ marginTop: '10px' }}>Status: {statusMessage}</p>}

      {result && (
        <div style={{ marginTop: '15px' }}>
          <p><strong>Image Hash:</strong> {result.hash}</p>
          <p><strong>Blockchain Status:</strong> {result.status}</p>
          <p><strong>Transaction Hash:</strong> {result.tx_hash}</p>
        </div>
      )}

      {verificationData && (
        <div style={{ marginTop: '20px', backgroundColor: '#f0f0f0', padding: '10px' }}>
          <h4>🔎 Verification Details</h4>
          <p><strong>Verified:</strong> ✅</p>
          <p><strong>Metadata:</strong> {verificationData.metadata}</p>
          <p><strong>Timestamp:</strong> {new Date(verificationData.timestamp * 1000).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default App;
