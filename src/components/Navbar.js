import React from 'react';
import './Navbar.css'; // Optional: Include a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="lumin">
        <a href="#home">Lumin</a>
        </div>
    
        <div className="menuopen">
        <li className="navbar-item">
          <a href="#product">Product</a>
        </li>
        <li className="navbar-item">
          <a href="#values">Our Values</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact Us</a>
        </li>
        <li className="navbar-item login">
          <a   style={{color:'white'}} href="#login">Login</a>
        </li>
        </div>
   
    </nav>
  );
};

export default Navbar;
