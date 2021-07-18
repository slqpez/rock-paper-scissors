import React from 'react'
import icon from "../../images/icon-lizard.svg"
import "./buttonIcon.css"

function ButtonIcon() {
    return (
        <div className="ButtonIcon">
            <img src={icon} alt="icon" className="icon"></img>
        </div>
    )
}

export default ButtonIcon
