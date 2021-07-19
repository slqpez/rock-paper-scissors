import React, {useContext}from "react";
import ButtonIcon from "./ButtonIcon";
import "./game.css";
import GameContext from "../context/GameContext"

const typesForPick = ["paper", "rock", "scissors", "lizard", "spock"];

function Game({ picked, isPlaying }) {
  const max = 5;
  const min = 0;

  const {setIsPlaying} = useContext(GameContext)

  function handlePlay(){
    setIsPlaying(false)
  }

  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return (
    <div className="Game">
      <section className="player-section">
        <h3>YOU PICKED</h3>
        <div className="btn-game">
          <ButtonIcon dataType={picked} isPlaying={isPlaying} />
        </div>
      </section>
      <div className="result-container">
          <p>YOU WIN</p>
          <button className="btn-play-again" onClick={handlePlay}>PLAY AGAIN</button>
      </div>
      <section className="house-section">
        <h3>THE HOUSE PICKED</h3>
        <div className="btn-game">
          <ButtonIcon dataType={typesForPick[randomNumber]} isPlaying={isPlaying} />
        </div>
      </section>
    </div>
  );
}

export default Game;
