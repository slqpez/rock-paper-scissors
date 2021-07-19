import React, { useState } from "react";
import "./App.css";

import Modal from "./components/Modal";
import Selection from "./components/Selection";
import Score from "./components/Score";
import Game from "./components/Game";



function App() {
  const [modalIn, setModalIn] = useState(false);
  const [picked, setPicked] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);

  function handleModalOpen() {
    setModalIn(!modalIn);
  }

  function handleSelection(e) {
   setPicked(e.currentTarget.id);
   setIsPlaying(true)
  }

  return (
    <div className="App home">
      <Score />
      {isPlaying ? (
        <Game picked={picked} isPlaying={isPlaying}/>
      ) : (
        <Selection handleSelection={handleSelection} />
      )}

      {modalIn ? <Modal handleModalOpen={handleModalOpen} /> : null}

      <button className="rules-btn" onClick={handleModalOpen}>
        RULES
      </button>
    </div>
  );
}

export default App;
