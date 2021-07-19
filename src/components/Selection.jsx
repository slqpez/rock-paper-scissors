import React from "react";
import ButtonIcon from "./ButtonIcon";


function Selection({handleSelection}) {
  return (
    <>
      <div className="selection-section">
        <ButtonIcon dataType="scissors"  handleSelection={handleSelection}></ButtonIcon>
        <ButtonIcon dataType="rock"  handleSelection={handleSelection}></ButtonIcon>
        <ButtonIcon dataType="lizard"  handleSelection={handleSelection}></ButtonIcon>
        <ButtonIcon dataType="spock"  handleSelection={handleSelection}></ButtonIcon>
        <ButtonIcon dataType="paper"  handleSelection={handleSelection}></ButtonIcon>
      </div>
    </>
  );
}

export default Selection;
