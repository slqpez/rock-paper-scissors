import React from "react";

import "./buttonIcon.css";

function ButtonIcon({ dataType, handleSelection, isPlaying }) {
  return (
    <button
      className={`ButtonIcon ButtonIcon-${dataType} ${dataType} ${isPlaying}ButtonInGame`}
      onClick={handleSelection}
      id={dataType}
    ></button>
  );
}

export default ButtonIcon;
