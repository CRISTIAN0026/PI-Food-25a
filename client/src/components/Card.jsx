import React from "react";

export default function Card ({name, image, diets}) {
    return(
        <div>
            <h3>{name}</h3>
            <h5>{diets}</h5>
            <img src={image} alt="image not found" width='200px' height='250px'/>
        </div>
    )
}