import React from "react";
import './Card.css'

export default function Card ({name, image, diets}) {
    return(
        <div id="card1">
            <h3 id="h3">{name}</h3>
            <h5 id="h5">{diets}</h5>
            <img id="img" src={image} alt="not found" width='300px' height='300px'/>
        </div>
    )
}