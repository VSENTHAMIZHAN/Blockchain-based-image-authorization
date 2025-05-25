import React from "react";
import "./Footer.css"; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>
        &copy; {new Date().getFullYear()} Verified Lens &mdash; Blockchain-based Image Authorization
      </span>
      <span>
        Made for HackVyuha'25 Hackathon
      </span>
    </div>
  </footer>
);

export default Footer;