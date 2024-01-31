import React from 'react'
import "./card.css"


function Card({serviceImgUrl,serviceName,serviceDetails,...props}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src={serviceImgUrl} alt="" />
            </div>
            <div className="card-details">
                <h3>{serviceName}</h3>
                <p>{serviceDetails}</p>
            </div>
        </div>
    )
}

export default Card