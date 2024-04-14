// src/component/Footer.js
import React from 'react';
import "./App.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
