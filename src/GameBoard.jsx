import React, { useState, useEffect, useRef } from "react";
import StatusPanel from "./status";
import WinScreen from "./WinScreen";
import "./GameBoard.css";

const allImages = {
  easy: [`${import.meta.env.BASE_URL}cat.png`, `${import.meta.env.BASE_URL}dog.jpg`],
  medium: [
    `${import.meta.env.BASE_URL}cat.png`,
    `${import.meta.env.BASE_URL}dog.jpg`,
    `${import.meta.env.BASE_URL}crab.png`,
    `${import.meta.env.BASE_URL}monkey.png`
  ],
  hard: [
    `${import.meta.env.BASE_URL}cat.png`,
    `${import.meta.env.BASE_URL}dog.jpg`,
    `${import.meta.env.BASE_URL}crab.png`,
    `${import.meta.env.BASE_URL}monkey.png`,
    `${import.meta.env.BASE_URL}tiger.png`,
    `${import.meta.env.BASE_URL}octopus.png`,
    `${import.meta.env.BASE_URL}elephant.png`,
    `${import.meta.env.BASE_URL}hippo.png`
  ]
};

function shuffleCards(images) {
  const cardPool = [...images, ...images];
  const cards = cardPool
    .map((src, idx) => ({
      id: `${idx}_${Math.random()}`,
      src,
      flipped: false,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);
  return cards;
}

const GameBoard = ({ difficulty }) => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [misses, setMisses] = useState(0);
  const [timer, setTimer] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const intervalRef = useRef(null);

  const getGridClass = () => {
    switch (difficulty) {
      case "medium":
        return "grid-medium";
      case "hard":
        return "grid-hard";
      case "easy":
      default:
        return "grid-easy";
    }
  };

  useEffect(() => {
    const images = allImages[difficulty] || allImages.easy;
    setCards(shuffleCards(images));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setMisses(0);
    setTimer(0);
    setGameOver(false);
  }, [difficulty]);

  useEffect(() => {
    if (gameOver) return;
    intervalRef.current = setInterval(() => setTimer((t) => t + 1), 1000);
    return () => clearInterval(intervalRef.current);
  }, [gameOver]);

  useEffect(() => {
    if (cards.length > 0 && cards.every((card) => card.matched)) {
      setGameOver(true);
      clearInterval(intervalRef.current);
    }
  }, [cards]);

  const handleCardClick = (idx) => {
    if (flipped.length === 2 || cards[idx].flipped || cards[idx].matched || gameOver) return;

    const newFlipped = [...flipped, idx];
    const newCards = cards.map((c, i) => (i === idx ? { ...c, flipped: true } : c));
    setCards(newCards);
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      setTimeout(() => {
        const [i1, i2] = newFlipped;
        if (newCards[i1].src === newCards[i2].src) {
          setCards((prev) =>
            prev.map((c, i) =>
              i === i1 || i === i2 ? { ...c, matched: true } : c
            )
          );
          setMatched((m) => [...m, newCards[i1].src]);
        } else {
          setCards((prev) =>
            prev.map((c, i) =>
              i === i1 || i === i2 ? { ...c, flipped: false } : c
            )
          );
          setMisses((miss) => miss + 1);
        }
        setFlipped([]);
      }, 900);
    }
  };

  return (
    <div className="game-board">
      {gameOver ? (
        <WinScreen
          time={timer}
          moves={moves}
          misses={misses}
          onHome={() => window.location.reload()}
        />
      ) : (
        <>
          <div className={`grid ${getGridClass()}`}>
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
                onClick={() => handleCardClick(idx)}
              >
                <div className="card-inner">
                  <div className="card-back"></div>
                  <div className="card-front">
                    <img src={card.src} alt="card" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <StatusPanel time={timer} moves={moves} misses={misses} />
        </>
      )}
    </div>
  );
};

export default GameBoard;
