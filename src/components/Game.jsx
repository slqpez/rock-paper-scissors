import React, { useContext, useState, useEffect } from "react";
import ButtonIcon from "./ButtonIcon";
import "./game.css";
import GameContext from "../context/GameContext";
import isWinner from "../utils/Game";

const typesForPick = ["paper", "rock", "scissors", "lizard", "spock"];

function Game({ picked, isPlaying }) {
  const max = 5;
  const min = 0;

  const [housePick, setHousePick] = useState("");
  const { setIsPlaying, setScore, score } = useContext(GameContext);

  function handlePlay() {
    setIsPlaying(false);
  }

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    setHousePick(typesForPick[randomNumber]);
  }, []);

  useEffect(() => {
    if (isWinner(picked, housePick) === true) {
      setScore(score + 1);
    }
  }, [housePick]);

  return (
    <div className="Game">
      <section className="player-section">
        <h3>YOU PICKED</h3>
        <div className="btn-game">
          <ButtonIcon dataType={picked} isPlaying={isPlaying} />
        </div>
      </section>
      <div className="result-container">
        <p>
          {isWinner(picked, housePick) === "draw"
            ? "DRAW"
            : isWinner(picked, housePick)
            ? "YOU WIN"
            : "YOU LOSE"}
        </p>
        <button className="btn-play-again" onClick={handlePlay}>
          PLAY AGAIN
        </button>
      </div>
      <section className="house-section">
        <h3>THE HOUSE PICKED</h3>
        <div className="btn-game">
          <ButtonIcon dataType={housePick} isPlaying={isPlaying} />
        </div>
      </section>
    </div>
  );
}

export default Game;
