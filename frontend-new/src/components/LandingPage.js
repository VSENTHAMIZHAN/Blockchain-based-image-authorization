import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; 
import logo from "../assets/logo.svg";
import platformImage from "../assets/verifylens-platform.png";


const LandingPage = () => (
  <main>
    {/* Hero Section */}
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Bringing Trust Back to Digital Journalism</h1>
          <p>
            Verified Lens uses blockchain and AI to verify press images, combat misinformation, and restore trust in digital media.
          </p>
          <div className="cta-buttons">
            <Link to="/mvp" className="btn btn-primary">
              See It in Action
            </Link>
            <a href="#how-it-works" className="btn btn-secondary">
              How It Works
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={logo} alt="Verified Lens Logo" style={{ width: 120, height: 120 }} />
        </div>
      </div>
    </section>

    {/* Problem Section */}
    <section id="problem" className="section">
      <div className="container">
        <h2>The Problem</h2>
        <div className="problem-grid">
          <div className="problem-card">
            <span role="img" aria-label="Trust Crisis">📰</span>
            <h3>Trust Crisis in Media</h3>
            <p>
              Audiences are losing faith in digital journalism due to fake and manipulated images.
            </p>
          </div>
          <div className="problem-card">
            <span role="img" aria-label="Misinformation">⚠️</span>
            <h3>Rampant Misinformation</h3>
            <p>
              Viral images are often misleading or doctored, fueling misinformation and confusion.
            </p>
          </div>
          <div className="problem-card">
            <span role="img" aria-label="No Verification">🔍</span>
            <h3>No Verification System</h3>
            <p>
              There is no easy, transparent way to verify the authenticity of press images.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Solution Section */}
    <section id="solution" className="section alt-section">
      <div className="container solution-content">
        <div className="solution-text">
          <h2>A Blockchain-Based Press Image Verification Platform</h2>
          <p>
            Verified Lens leverages blockchain and AI to create a tamper-proof record of press images, their metadata, and authenticity.
          </p>
          <p>
            Journalists and media houses can upload images, generate cryptographic proofs, and store them securely on-chain and on IPFS.
          </p>
          <p>
            Anyone can verify the origin, integrity, and history of an image instantly.
          </p>
          <a href="#how-it-works" className="btn btn-secondary">Learn More</a>
        </div>
        <div className="solution-image">
          <img src={platformImage} alt="Verified Lens Platform" />
        </div>

      </div>
    </section>

    {/* How It Works Section */}
    <section id="how-it-works" className="section">
      <div className="container">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <span role="img" aria-label="Capture">📸</span>
            <h3>Capture</h3>
            <p>Journalist captures an image using a trusted device.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <span role="img" aria-label="Metadata">🗂️</span>
            <h3>Metadata Generation</h3>
            <p>Device/app generates metadata (location, time, device info).</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <span role="img" aria-label="Storage">💾</span>
            <h3>Storage</h3>
            <p>Image and metadata are stored on IPFS and a blockchain smart contract.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <span role="img" aria-label="Verification">✅</span>
            <h3>Verification</h3>
            <p>Anyone can verify authenticity by checking the blockchain record.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Case Studies Section */}
    <section id="case-studies" className="section alt-section">
      <div className="container">
        <h2>Real-World Case Studies</h2>
        <div className="cases">
          <div className="case-card">
            <h3>
              <span role="img" aria-label="Election">🗳️</span> Election Misinformation
            </h3>
            <p>
              A viral image claimed to show ballot tampering. It spread rapidly, influencing public opinion.
            </p>
            <p className="impact">
              Impact: Undermined trust in the electoral process.
            </p>
            <div className="solution-box">
              <h4>With Verified Lens:</h4>
              <p>
                The image’s origin and integrity could be instantly verified, preventing the spread of false claims.
              </p>
            </div>
          </div>
          <div className="case-card">
            <h3>
              <span role="img" aria-label="Disaster">🌪️</span> Natural Disaster Hoax
            </h3>
            <p>
              Fake images of disaster aftermath circulated online, causing panic and misallocation of resources.
            </p>
            <p className="impact">
              Impact: Delayed aid and increased confusion.
            </p>
            <div className="solution-box">
              <h4>With Verified Lens:</h4>
              <p>
                Only verified images would be trusted, ensuring accurate information during crises.
              </p>
            </div>
          </div>
          <div className="case-card">
            <h3>
              <span role="img" aria-label="War Zone">🪖</span> War Zone AI Fakes
            </h3>
            <p>
              AI-generated images from conflict zones misled the public and media outlets.
            </p>
            <p className="impact">
              Impact: Spread of propaganda and misinformation.
            </p>
            <div className="solution-box">
              <h4>With Verified Lens:</h4>
              <p>
                Blockchain-backed verification would expose AI fakes and protect journalistic integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default LandingPage;