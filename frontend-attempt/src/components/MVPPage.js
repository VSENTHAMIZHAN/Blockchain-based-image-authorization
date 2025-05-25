import React, { useState } from "react";
import axios from "axios";
import "./MVPPage.css"; // Create this file for custom styles if needed

const MVPPage = () => {
  const [file, setFile] = useState(null);
  const [metadata, setMetadata] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [result, setResult] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [verificationData, setVerificationData] = useState(null);
  const [morphDetails, setMorphDetails] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  // Handle metadata input change
  const handleMetadataChange = (event) => {
    setMetadata(event.target.value);
  };

  // Handle upload
  const handleUpload = async () => {
    if (!file || !metadata) {
      alert("Please select an image and enter metadata!");
      return;
    }
    setStatusMessage("Uploading...");
    setMorphDetails(null);

    const formData = new FormData();
    formData.append("image", file);
    formData.append("metadata", metadata);

    try {
      const response = await axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(response.data);
      if (response.data.morphDetected) {
        setStatusMessage("Uploaded - Morph Detected!");
        setMorphDetails({
          message: "Warning: Morphing detected in the uploaded image.",
          severity: "high",
        });
      } else {
        setStatusMessage("Upload Success");
      }
    } catch (error) {
      setStatusMessage("Upload Error");
      alert(
        error?.response?.data?.message ||
          "Upload failed. Please try again."
      );
      console.error(error);
    }
  };

  // Handle verify
  const handleVerify = async () => {
    if (!result || !result.imageHash) {
      alert("No uploaded image hash to verify!");
      return;
    }
    try {
      const response = await axios.post("/verify", {
        imageHash: result.imageHash,
      });
      if (response.data.verified) {
        setVerificationData(response.data);
        alert(
          `Image Verified!\nMetadata: ${response.data.metadata}\nTimestamp: ${new Date(
            response.data.timestamp
          ).toLocaleString()}${
            response.data.morphDetected
              ? "\nWarning: Morphing detected in this image."
              : ""
          }`
        );
      } else {
        alert("Image not found or tampered!");
      }
    } catch (error) {
      alert("Verification failed");
      console.error(error);
    }
  };

  return (
    <main className="mvp-main">
      <div className="mvp-card">
        <h2>Blockchain Image Auth with Morph Detection</h2>

        {morphDetails && (
          <div
            className={`morph-alert ${
              morphDetails.severity === "high" ? "alert-high" : "alert-low"
            }`}
          >
            {morphDetails.message}
          </div>
        )}

        <div className="form-group">
          <label>
            Select Image:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>

        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}

        <div className="form-group">
          <label>
            Metadata:
            <input
              type="text"
              value={metadata}
              onChange={handleMetadataChange}
              placeholder="Enter metadata (e.g., location, description)"
            />
          </label>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={handleUpload}>
            Upload
          </button>
          <button
            className="btn btn-secondary"
            onClick={handleVerify}
            disabled={!result}
          >
            Verify Image
          </button>
        </div>

        {statusMessage && (
          <p
            className={`status-message ${
              statusMessage.toLowerCase().includes("error")
                ? "error"
                : statusMessage.toLowerCase().includes("morph")
                ? "morph"
                : "success"
            }`}
          >
            {statusMessage}
          </p>
        )}

        {result && (
          <div className="details-card">
            <h4>Upload Details</h4>
            <p>
              <strong>Image Hash:</strong> {result.imageHash}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {result.morphDetected ? "Morph Detected" : "Uploaded"}
            </p>
            <p>
              <strong>Transaction Hash:</strong> {result.txHash}
            </p>
            {result.morphDetected && (
              <p className="morph-warning">
                Warning: Morphing detected in this image.
              </p>
            )}
          </div>
        )}

        {verificationData && (
          <div className="details-card">
            <h4>Verification Details</h4>
            <p>
              <strong>Status:</strong>{" "}
              {verificationData.verified ? "Verified" : "Not Verified"}
            </p>
            <p>
              <strong>Metadata:</strong> {verificationData.metadata}
            </p>
            <p>
              <strong>Timestamp:</strong>{" "}
              {new Date(verificationData.timestamp).toLocaleString()}
            </p>
            {verificationData.morphDetected && (
              <p className="morph-warning">
                Warning: Morphing detected in this image.
              </p>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default MVPPage;