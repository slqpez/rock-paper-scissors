import React, { useState } from "react";
import "./App.css";
import Lizard from "../images/icon-lizard.svg";
import Paper from "../images/icon-paper.svg";
import Rock from "../images/icon-rock.svg";
import Scissors from "../images/icon-scissors.svg";
import Spock from "../images/icon-spock.svg";
import RulesImage from "../images/image-rules-bonus.svg";
import logo from "../images/logo-bonus.svg";
import Close from "../images/icon-close.svg";
import ButtonIcon from "./components/ButtonIcon";

function App() {
  const [modalIn, setModalIn] = useState(false);


  function handleModalOpen(){
    setModalIn(!modalIn);
  }

  return (
    <div className="App home">
      <div className="score-section">
        <img src={logo} alt="logo" className="logo" />
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

      {modalIn? <><div className="modal-layer"></div>
      <div className="rules-modal">
        <button className="close-icon"  onClick={handleModalOpen}>
        </button>
        <h2 className="rules-title">RULES</h2>
        <img src={RulesImage} alt="Rules image" />
      </div></>:null}
      
      <button className="rules-btn" onClick={handleModalOpen}>RULES</button>
    </div>
  );
}

export default App;
