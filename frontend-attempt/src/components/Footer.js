import React from "react";
import "./Footer.css"; 

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <span>
        &copy; {new Date().getFullYear()} VerifyLens &mdash; Blockchain-based Image Authorization
      </span>
      <span>
        Made for Hack2Bengal Hackathon
      </span>
    </div>
  </footer>
);

export default Footer;