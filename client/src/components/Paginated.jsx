import React from 'react';
//import { Link } from 'react-router-dom';
import './Paginated.css'


export default function Paginated({recipeForPage, allRecipes, paginated}){
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allRecipes/recipeForPage); i++) {
        pageNumbers.push(i )
    }

    return(
        <nav className='Paginated' >
            {pageNumbers &&
                    pageNumbers.map(n => ( 
                        <button onClick={() => paginated(n)} key={n}>{n}</button>
                    ))
                }
        </nav>
    )
}