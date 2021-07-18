import React from 'react'

import "./buttonIcon.css"

function ButtonIcon({dataType, icon}) {
    return (
        <div className={`ButtonIcon ${dataType}`}>
            <img src={icon} alt="icon"  className="icon"></img>
        </div>
    )
}

export default ButtonIcon
