import { useState } from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';
import DifficultySelection from './DifficultySelection.jsx';
import GameBoard from './GameBoard.jsx';
import StatusPanel from './status.jsx';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <>
      <div
        className="page-logo-wrapper"
        onClick={() => {
          setGameStarted(false);
          setDifficulty(null);
        }}
        style={{ cursor: 'pointer' }}
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.png`}
          alt="Mind Game Logo"
          className="page-logo"
        />
      </div>

      <div className="app-container">
        {!gameStarted ? (
          <Header
            onStart={() => setGameStarted(true)}
            goHome={() => {
              setGameStarted(false);
              setDifficulty(null);
            }}
          />
        ) : !difficulty ? (
          <DifficultySelection setDifficulty={setDifficulty} />
        ) : (
          <>
            <GameBoard difficulty={difficulty} />
          </>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
