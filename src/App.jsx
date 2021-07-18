import React, { useState } from "react";
import "./App.css";
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
        <ButtonIcon></ButtonIcon>
      </div>
    </div>
  );
}

export default App;
