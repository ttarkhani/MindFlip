import { useState } from 'react';
import './App.css';
import Header from './header.jsx';
import Footer from './footer.jsx';
import DifficultySelection from './DifficultySelection.jsx';
import GameBoard from './GameBoard.jsx';
import StatusPanel from './status.jsx';

function App() {
  
  const [gameStarted, setGameStarted] = useState(false);
  const[difficulty, setDifficulty] = useState(null);
  
  return (
    <>
      <img src="/logo.png" alt="Mind Game Logo" className="page-logo" />
      <div className="app-container">
        {!gameStarted ? (
          <Header onStart={() => setGameStarted(true)} />
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
