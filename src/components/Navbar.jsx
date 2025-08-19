import React from 'react';
import logo from '/logo.png';

const Navbar = () => (
  <nav className="navbar">
    <div className="container navbar-container">
        <img src={logo} alt="MedMindeRx App" style={{ width: "6%", }}/>
      <a href="#" className="logo">MedMindeRx</a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#termsandconditions">Terms and Conditions</a></li>
        <li><a href="#privacypolicy">Privacy Policy</a></li>
      </ul>
      <a href="#download" className="btn-download ">Download App</a>
    </div>
  </nav>
);

export default Navbar;