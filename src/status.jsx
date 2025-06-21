import React from 'react';
import './assets/status.css';

function StatusPanel() {
  return (
    <div className="status-panel">
      <p>Time: 0s</p>
      <p>Moves: 0</p>
      <p>Misses: 0</p>
    </div>
  );
}

export default StatusPanel;
