import React from "react";
import logo from "../../images/logo-bonus.svg";


function Score() {
  return (
    <>
      <div className="score-section">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-squard">
          <span className="score-square-title">SCORE</span>
          <span className="score-square-value">12</span>
        </div>
      </div>
    </>
  );
}

export default Score;
