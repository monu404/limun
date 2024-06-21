import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

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
                    <a style={{ color: 'white' }} href="#login">Login</a>
                </li>
                <p className='theme-changer'>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {darkMode ? 'Light Mode' : 'Dark Mode'}
                    </button>
                </p>
            </div>
        </nav>
    );
};

export default Navbar;
