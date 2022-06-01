import React from 'react';
//import { Link } from 'react-router-dom';


export default function Paginated({recipeForPage, allRecipes, paginated}){
    const pageNumbers = []

    for (let i = 1; i <=Math.ceil(allRecipes/recipeForPage); i++) {
        pageNumbers.push(i )
    }

    return(
        <nav >
            <ul>
                {pageNumbers &&
                    pageNumbers.map(n => ( 
                        <li key={n}>
                            <button onClick={() => paginated(n)} >{n}</button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}