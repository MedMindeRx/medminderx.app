import React from 'react';
import logo from '/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-container">
      <div className="about">
        <h1>MedMindeRx</h1>
        <p>Your medical companion for better health</p>
      </div>
      <div className="links">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#termsandconditions">Terms and Conditions</a></li>
          <li><a href="#privacypolicy">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      &copy; {new Date().getFullYear()} MedMindeRx. All rights reserved.
    </div>
  </footer>
);

export default Footer;