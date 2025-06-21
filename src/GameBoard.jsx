import React from 'react';
import './assets/gameboard.css';

function GameBoard({ difficulty }) {
  let rows = 2, cols = 2;
  if (difficulty === 'medium') {
    rows = 2;
    cols = 3;
  } else if (difficulty === 'hard') {
    rows = 4;
    cols = 4;
  }

  const totalCards = rows * cols;
  const cards = Array.from({ length: totalCards }, (_, i) => <div key={i} className="card">?</div>);

  return (
    <div className="gameboard" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cards}
    </div>
  );
}

export default GameBoard;
