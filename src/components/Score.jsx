import React, {useContext} from "react";
import logo from "../../images/logo-bonus.svg";
import GameContext from "../context/GameContext"


function Score() {
  const {score} = useContext(GameContext)
  return (
    <>
      <div className="score-section">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-squard">
          <span className="score-square-title">SCORE</span>
          <span className="score-square-value">{score}</span>
        </div>
      </div>
    </>
  );
}

export default Score;
