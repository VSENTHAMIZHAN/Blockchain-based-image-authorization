import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Optionally, place the CSS styles here or in your index.html

function LandingPage() {
  return (
    <div>
      <header>
        <div className="container header-container">
          <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
              viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
              strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 18v-6"></path>
              <path d="M12 8h.01"></path>
            </svg>
            VerifyLens
          </div>
          <nav>
            <ul>
              <li><a href="#problem">The Problem</a></li>
              <li><a href="#solution">Our Solution</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#case-studies">Case Studies</a></li>
              <li><Link to="/mvp" className="cta-button">Get Started</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      
      <section className="hero">
        <div className="container">
          <h1>Bringing Trust Back to Digital Journalism</h1>
          <p>A blockchain-based platform that verifies press images, combats fake news, and helps restore public confidence in photojournalism.</p>
          <div className="cta-buttons">
            <Link to="/mvp" className="primary-button">Start Verifying</Link>
            <a href="#how-it-works" className="secondary-button">How It Works</a>
          </div>
        </div>
      </section>
      
      <section id="problem" className="problem">
        <div className="container">
          <h2 className="section-title">The Problem</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h3>Trust Crisis in Media</h3>
              <p>In an age of AI-generated content and misinformation, public trust in journalism has collapsed. People question if what they see is real.</p>
            </div>
            <div className="problem-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.04-3.44A2.5 2.5 0 0 1 7.5 12 2.5 2.5 0 0 1 5 9.5V7a2.5 2.5 0 0 1 4.5-1.5"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.04-3.44A2.5 2.5 0 0 0 16.5 12 2.5 2.5 0 0 0 19 9.5V7a2.5 2.5 0 0 0-4.5-1.5"></path>
              </svg>
              <h3>Rampant Misinformation</h3>
              <p>Fake or doctored images spread rapidly during critical events like elections, protests, and wars, manipulating public opinion before the truth can emerge.</p>
            </div>
            <div className="problem-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                <line x1="1" y1="1" x2="23" y2="23"></line>
              </svg>
              <h3>No Verification System</h3>
              <p>Today, there is no universal system to prove an image was actually taken by a verified journalist, at a specific time and place, and hasn't been altered.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="solution" className="solution">
        <div className="container">
          <h2 className="section-title">Our Solution</h2>
          <div className="solution-content">
            <div className="solution-text">
              <h2>A Blockchain-Based Press Image Verification Platform</h2>
              <p>VerifyLens creates a decentralized system that allows verified journalists to securely upload authentic images—and gives the public an easy way to verify them.</p>
              <p>Using cryptographic hashing, blockchain technology, and decentralized storage, we create a permanent, tamper-proof record of press images that can be easily verified by anyone.</p>
              <p>Our platform helps restore trust in journalism, protects the reputation of honest journalists, and empowers fact-checkers with real tools to fight misinformation.</p>
              <Link to="/mvp" className="primary-button">Learn More</Link>
            </div>
            <div className="solution-image">
              <img src="/api/placeholder/500/350" alt="VerifyLens Platform" />
            </div>
          </div>
        </div>
      </section>
      
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>
              <h3>Capture</h3>
              <p>A verified journalist takes a photo using our trusted app or uploads an original image through our secure platform.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <h3>Metadata Generation</h3>
              <p>Our system automatically generates metadata including timestamp, location, photographer ID, and a unique cryptographic hash of the image.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="12" x2="2" y2="12"></line>
                <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                <line x1="6" y1="16" x2="6.01" y2="16"></line>
                <line x1="10" y1="16" x2="10.01" y2="16"></line>
              </svg>
              <h3>Storage</h3>
              <p>The image is stored on IPFS, while the metadata and hash are stored on a public blockchain—ensuring the data is tamper-proof and publicly verifiable.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <svg className="step-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <h3>Verification</h3>
              <p>Anyone can upload or drag an image to our verification portal. The system recalculates the hash and checks it against the blockchain to confirm authenticity.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="case-studies" className="case-studies">
        <div className="container">
          <h2 className="section-title">Real-World Case Studies</h2>
          <div className="cases">
            <div className="case-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                Election Misinformation
              </h3>
              <p>A doctored photo showed Kamala Harris with Jeffrey Epstein—intended to damage her political credibility. It went viral before fact-checkers could respond.</p>
              <p className="impact">Impact: Millions viewed and shared it, leading to confusion and mistrust.</p>
              <div className="solution-box">
                <h4>With VerifyLens:</h4>
                <p>Image would have failed verification (hash mismatch) and fact-checkers could prove it's not a verified press image.</p>
              </div>
            </div>
            <div className="case-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
                Natural Disaster Hoax
              </h3>
              <p>A viral image showed a shark swimming on a flooded highway during Hurricane Sandy. It was photoshopped, but people believed it.</p>
              <p className="impact">Impact: Widespread panic and misinformation during an actual crisis.</p>
              <div className="solution-box">
                <h4>With VerifyLens:</h4>
                <p>No matching hash or metadata would immediately identify it as fake, and real images from verified journalists would be available with timestamp &amp; GPS.</p>
              </div>
            </div>
            <div className="case-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" 
                  strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                War Zone AI Fakes
              </h3>
              <p>Dozens of AI-generated and doctored war photos spread across both pro-Russian and pro-Ukrainian channels—from fake explosions to staged victims.</p>
              <p className="impact">Impact: Misinformation used as digital warfare; eroded trust in all media.</p>
              <div className="solution-box">
                <h4>With VerifyLens:</h4>
                <p>On-ground reporters could verify real images using on-chain metadata, and AI fakes would fail authenticity checks with no matching hash or photographer ID.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p>© 2025 VerifyLens. All rights reserved.</p>
        </div>
      </section>
      
      <footer>
        <div className="container footer-content">
          <div className="footer-col">
            <h3>About</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616 3c-2.724 0-4.932 2.208-4.932 4.932 0 .387.044.762.127 1.124C7.728 8.89 4.1 6.719 1.671 3.149a4.93 4.93 0 0 0-.666 2.479c0 1.708.87 3.215 2.191 4.099a4.904 4.904 0 0 1-2.232-.616c-.054 1.997 1.396 3.87 3.457 4.292a4.935 4.935 0 0 1-2.224.084 4.936 4.936 0 0 0 4.604 3.417A9.867 9.867 0 0 1 0 19.54a13.941 13.941 0 0 0 7.548 2.212c9.057 0 14.01-7.511 14.01-14.01 0-.213-.005-.425-.015-.636A10.012 10.012 0 0 0 24 4.557z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.723v20.554C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.723V1.723C24 .77 23.21 0 22.23 0zM7.09 20.452H3.56V9h3.53v11.452zM5.322 7.432a2.05 2.05 0 1 1 0-4.101 2.05 2.05 0 0 1 0 4.101zM20.452 20.452h-3.53v-5.911c0-1.408-.028-3.22-1.965-3.22-1.965 0-2.265 1.535-2.265 3.118v6.013h-3.53V9h3.397v1.561h.049c.473-.896 1.632-1.838 3.36-1.838 3.594 0 4.258 2.365 4.258 5.444v6.285z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.258.82-.577 0-.285-.011-1.04-.017-2.04-3.338.724-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.803 1.305 3.49.998.107-.776.42-1.305.763-1.605-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3.003-.404c1.018.005 2.044.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.874.12 3.176.77.84 1.236 1.91 1.236 3.22 0 4.61-2.807 5.625-5.48 5.92.431.372.815 1.103.815 2.222 0 1.606-.015 2.903-.015 3.293 0 .321.218.694.825.576C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;