import React from 'react';
import './Cards.css';

function Cards({props}) {
    return (
        <div className={props.class}>
            <h2 className="cards__heading">{props.heading}</h2>
            <span className="cards__description">{props.desc}</span>
            <div className="image">
                <img src={`/images/${props.image}`} alt="logos" />
            </div>
        </div>
    )
}

export default Cards
