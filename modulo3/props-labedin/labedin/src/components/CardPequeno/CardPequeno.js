import React from 'react';
import "./CardPequeno.css";

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
        <div>
                <h4>{props.frase}</h4>
                <p>{props.endereco}</p>
            </div>
        </div>
    )

}

export default CardPequeno;