import React from 'react';
import './header.css';

function Header() {
  return (
    <header className="header">
      <h1>Mind Flip</h1>
      <img src="/brain.png" alt="Brain Icon" className="header-icon" />
      <p className='text'>Test your mind with this game</p>
      <button className="start-button">Start Game</button>
    </header>
  );
}

export default Header;
