import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';
import './Details.css'

let ids = 1

export default function Details() {
    const dispatch = useDispatch()
    const {id} = useParams()
    const myRecipe = useSelector(state => state.recipeDetails)
    
    useEffect(() => {
        dispatch(getRecipeDetails(id))
    }, [dispatch, id])
    

    
    return(
        <div className='details'>
            { 
            
            myRecipe.length > 0?
            <div key={myRecipe[0].id} id='da'>
                <div>
                <h1 className='name11'>Name: {myRecipe[0].name}</h1>
                </div>
                <div>
                <img id='img1'src={myRecipe[0].image ? myRecipe[0].image :'https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_image__small/public/migrated/gastritis-dieta.jpg'} alt='' width='500px' height='500px'/>
                <h3 id='h3'>Healthy score: {myRecipe[0].healthScore}</h3>
                <h5 id='diets'>Diets: {myRecipe[0].diets ?  myRecipe[0].diets + '  ' : myRecipe[0].Diets.map(d =>d.name + ('  '))}</h5>
                </div>
                <div id='steps'>
                    <h3>Steps: </h3>
                {
                typeof myRecipe[0].steps === 'string' ? myRecipe[0].steps : myRecipe[0].steps?.map(s => ( <p className='par' key={ids++}>{s.number} : {s.step}</p>))
                }
                </div>
                <div> 
                <h3>Summary:</h3>
                <p id='sum'> {myRecipe[0].summary}</p>
                </div>
                
            </div>
            : <p>Loading...</p>
            }
            <Link to='/home'><button id='recipes1'>Return to recipes</button></Link>

        </div> 
    )


}


