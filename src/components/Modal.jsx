import React from "react";
import RulesImage from "../../images/image-rules-bonus.svg";


function Modal({handleModalOpen}) {
  return (
    <>
      <div className="modal-layer"></div>
      <div className="rules-modal">
        <button className="close-icon" onClick={handleModalOpen}></button>
        <h2 className="rules-title">RULES</h2>
        <img src={RulesImage} alt="Rules image" />
      </div>
    </>
  );
}

export default Modal;
