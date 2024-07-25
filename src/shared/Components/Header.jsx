import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="https://static-00.iconduck.com/assets.00/money-with-wings-emoji-2048x1717-0ax0mo0h.png" alt="Logo" className="logo" />
        <span className="website-name" >FARE ENOUGH</span>
      </div>
      <div className="header-center">
        <input type="text" className="search-bar" placeholder="Search..." />
        
      </div>
      <div className="header-right">      
      <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
      </div>
    </header>
  );
};

export default Header