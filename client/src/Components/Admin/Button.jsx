import React from 'react'
import "./button.css"

function Button({ name, onclick, color="",...props }) {
    return (
        <button onClick={onclick} className={`admin-btn ${color}`}>
            {name}
        </button>
    )
}

export default Button