import React from 'react';


export default function Paginated({recipeForPage, allRecipes, paginated}){
    const pageNumbers = []

    for (let i = 0; i <=Math.ceil(allRecipes/recipeForPage); i++) {
        pageNumbers.push(i + 1)
    }

    return(
        <nav >
            <ul>
                {pageNumbers &&
                    pageNumbers.map(n => ( 
                        <li key={n}>
                            <a onClick={() => paginated(n)} >{n}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}