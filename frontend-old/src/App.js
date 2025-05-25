import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [verificationData, setVerificationData] = useState(null);
  const [morphDetails, setMorphDetails] = useState(null);

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
      return alert('Please select an image and enter metadata!');
    }

    setStatusMessage('Uploading...');
    const formData = new FormData();
    formData.append('image', file);
    formData.append('metadata', metadata);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      
      setResult(res.data);
      setStatusMessage(res.data.is_morph ? 'Uploaded - Morph Detected!' : 'Upload Success');
      
      if (res.data.is_morph) {
        setMorphDetails({
          message: 'This image appears to be a modified version of an existing image',
          severity: 'warning'
        });
      }
    } catch (err) {
      setStatusMessage('Upload Error');
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
        alert(`Verified!\nMetadata: ${verifyRes.data.metadata}\n` + 
              (verifyRes.data.is_morph ? '⚠️ Warning: Potential morph detected' : '✅ Original image'));
      } else {
        alert('Image not found or tampered!');
      }
    } catch (err) {
      alert('Verification failed');
      console.error('Verification error:', err);
    }
  };

  return (
    <div style={{
      fontFamily: 'Poppins, sans-serif',
      background: '#f0f8ff',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '40px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '600px',
        background: '#fff',
        borderRadius: '16px',
        padding: '30px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
        textAlign: 'center',
        border: '2px solid #1e3a8a'
      }}>
        <h2 style={{
          color: '#1e3a8a',
          fontSize: '28px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}>Blockchain Image Auth with Morph Detection</h2>

        {morphDetails && (
          <div style={{
            padding: '10px',
            background: morphDetails.severity === 'warning' ? '#fff3cd' : '#d4edda',
            color: morphDetails.severity === 'warning' ? '#856404' : '#155724',
            borderRadius: '8px',
            marginBottom: '20px',
            border: `1px solid ${morphDetails.severity === 'warning' ? '#ffeeba' : '#c3e6cb'}`
          }}>
            <strong>{morphDetails.severity === 'warning' ? '⚠️ Warning: ' : 'ℹ️ '}</strong>
            {morphDetails.message}
          </div>
        )}

        <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
        <br />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            style={{
              marginTop: '10px',
              maxWidth: '100%',
              border: '2px solid #1e3a8a',
              borderRadius: '8px'
            }}
          />
        )}
        <br />
        <input
          type="text"
          placeholder="Enter Metadata"
          value={metadata}
          onChange={handleMetadataChange}
          style={{
            marginTop: '15px',
            padding: '10px',
            width: '100%',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '14px'
          }}
        />
        <br />
        <button
          onClick={handleUpload}
          style={{
            marginTop: '15px',
            marginRight: '10px',
            padding: '10px 20px',
            background: '#1e3a8a',
            color: '#ffea00',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Upload
        </button>
        <button
          onClick={handleVerify}
          disabled={!result}
          style={{
            marginTop: '15px',
            padding: '10px 20px',
            background: '#ffea00',
            color: '#1e3a8a',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: 'bold',
            opacity: !result ? 0.5 : 1
          }}
        >
          Verify Image
        </button>

        {statusMessage && (
          <p style={{ 
            marginTop: '15px', 
            fontWeight: 'bold',
            color: statusMessage.includes('Error') ? '#dc3545' : 
                  statusMessage.includes('Morph') ? '#ffc107' : '#28a745'
          }}>
            {statusMessage}
          </p>
        )}

        {result && (
          <div style={{
            marginTop: '20px',
            textAlign: 'left',
            padding: '10px',
            backgroundColor: '#e0ecff',
            borderRadius: '10px'
          }}>
            <p><strong>Image Hash:</strong> {result.hash}</p>
            <p><strong>Status:</strong> {result.status}</p>
            <p><strong>Transaction:</strong> {result.tx_hash}</p>
            {result.is_morph && (
              <p style={{ color: '#dc3545', fontWeight: 'bold' }}>⚠️ Potential morph detected</p>
            )}
          </div>
        )}

        {verificationData && (
          <div style={{
            marginTop: '20px',
            textAlign: 'left',
            backgroundColor: verificationData.is_morph ? '#fff3cd' : '#d4edda',
            borderRadius: '10px',
            padding: '10px',
            border: `1px solid ${verificationData.is_morph ? '#ffeeba' : '#c3e6cb'}`
          }}>
            <h4>🔍 Verification Details</h4>
            <p><strong>Verified:</strong> {verificationData.verified ? '✅ Yes' : '❌ No'}</p>
            <p><strong>Metadata:</strong> {verificationData.metadata}</p>
            <p><strong>Timestamp:</strong> {new Date(verificationData.timestamp * 1000).toLocaleString()}</p>
            {verificationData.is_morph && (
              <p style={{ color: '#856404', fontWeight: 'bold' }}>
                ⚠️ Warning: This image appears to be a modified version of an existing image
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;