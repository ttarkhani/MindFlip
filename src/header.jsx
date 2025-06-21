import React from 'react';
import './header.css';
import DifficultySelection from './DifficultySelection.jsx';

function Header({ onStart }) {
  return (
    <header className="header">
      <h1>Mind Flip</h1>
      <img src="/brain.png" alt="Brain Icon" className="header-icon" />
      <p className="text">Test your mind with this game</p>
      <button
        className="start-button"
        onClick={onStart}
      >
        Start Game
      </button>
    </header>
  );
}

export default Header;
