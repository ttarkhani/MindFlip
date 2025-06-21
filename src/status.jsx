import React from "react";
import "./status.css";

function StatusPanel({ time, moves, misses }) {
  return (
    <div className="status-panel">
      <p>Time: {time}s</p>
      <p>Moves: {moves}</p>
      <p>Misses: {misses}</p>
    </div>
  );
}

export default StatusPanel;
