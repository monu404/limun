import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WelcomeSection from './components/WelcomeSection';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Team from './components/Team';
import Value from './components/Value';
import Footer from './components/Footer';
import './App.css';

function App() {
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
        <div className="App">
            <Navbar />
            <button className="theme-toggle" onClick={toggleTheme}>
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
            <WelcomeSection />
            <Section3 />
            <Section4 />
            <Team />
            <Value />
            <Footer />
        </div>
    );
}

export default App;
