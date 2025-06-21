import React from 'react';
import './header.css';
import DifficultySelection from './DifficultySelection.jsx';

function Header({ onStart, goHome }) {
  return (
    <header className="header">
      <div onClick={goHome} style={{ cursor: 'pointer' }}>
        <h1>Mind Flip</h1>
        <img
          src={`${import.meta.env.BASE_URL}brain.png`}
          alt="Brain Icon"
          className="header-icon"
        />
      </div>
      <p className="text">Test your mind with this game</p>
      <button className="start-button" onClick={onStart}>
        Start Game
      </button>
    </header>
  );
}

export default Header;
