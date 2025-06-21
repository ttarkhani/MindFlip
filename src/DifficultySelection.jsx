import React from 'react';
import './DifficultySelection.css'; 

function DifficultySelection({ setDifficulty }) {
  return (
    <div className="difficulty-card">
      <h2 className="difficulty-title">Select your difficulty</h2>
      <button onClick={() => setDifficulty('easy')}>Easy</button>
      <button onClick={() => setDifficulty('medium')}>Medium</button>
      <button onClick={() => setDifficulty('hard')}>Hard</button>
    </div>
  );
}

export default DifficultySelection;
