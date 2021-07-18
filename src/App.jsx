import React, { useState } from "react";
import "./App.css";
import Lizard from "../images/icon-lizard.svg"
import Paper from "../images/icon-paper.svg"
import Rock from "../images/icon-rock.svg"
import Scissors from "../images/icon-scissors.svg"
import Spock from "../images/icon-spock.svg"

import logo from "../images/logo-bonus.svg"
import ButtonIcon from "./components/ButtonIcon";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App home">
      <div className="score-section">
      <img src={logo} alt="logo" className="logo"/>
        <div className="score-squard">
          <span className="score-square-title">SCORE</span>
          <span className="score-square-value">12</span>
        </div>
      </div>
      <div className="game-section">
        <ButtonIcon dataType="scissors" icon={Scissors}></ButtonIcon>
        <ButtonIcon dataType="rock" icon={Rock}></ButtonIcon>
        <ButtonIcon dataType="lizard" icon={Lizard}></ButtonIcon>
        <ButtonIcon dataType="spock" icon={Spock}></ButtonIcon>
        <ButtonIcon dataType="paper" icon={Paper}></ButtonIcon>
      </div>
    </div>
  );
}

export default App;
