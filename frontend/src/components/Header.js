import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.css"; 

const Header = () => {
  const location = useLocation();
  return (
    <header className="header-container">
      <div className="header-inner">
        <Link to="/" className="logo">
          <img src={logo} alt="Verified Lens Logo" width={40} height={40} />
          <span className="logo-text">Verified Lens</span>
        </Link>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#problem">The Problem</a>
            </li>
            <li>
              <a href="#solution">Our Solution</a>
            </li>
            <li>
              <a href="#how-it-works">How It Works</a>
            </li>
            <li>
              <a href="#case-studies">Case Studies</a>
            </li>
            <li>
              <Link
                to="/mvp"
                className={
                  location.pathname === "/mvp"
                    ? "cta-btn active"
                    : "cta-btn"
                }
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;