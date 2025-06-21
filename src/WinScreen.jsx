import React from "react";
import "./WinScreen.css";

function WinScreen({ time, moves, misses, onHome }) {
  return (
    <div className="win-screen">
      <h2>🎉 You Win!</h2>
      <p><strong>Time:</strong> {time}s</p>
      <p><strong>Moves:</strong> {moves}</p>
      <p><strong>Misses:</strong> {misses}</p>
      <button className="home-button" onClick={onHome}>
        Return Home
      </button>
    </div>
  );
}

export default WinScreen;

