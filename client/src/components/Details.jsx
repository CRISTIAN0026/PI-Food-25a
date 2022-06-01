import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetails } from '../redux/actions';
import { useParams } from 'react-router-dom';


let ids = 1
let idss = 100
export default function Details() {
    const dispatch = useDispatch()
    const {id} = useParams()
    
    
    useEffect(() => {
        dispatch(getRecipeDetails(id))
    }, [dispatch, id])

    const myRecipe = useSelector(state => state.recipeDetails)

    return(
        <div>
            { 
            myRecipe.length > 0?
             <div key={myRecipe[0].id}>
                <h1>Name: {myRecipe[0].name}</h1>
                <img src={myRecipe[0].image} alt='not found' width='500px' height='500px'/>
                {
                    myRecipe[0].steps?.map(s => ( <p key={ids++}>{s.number} : {s.step}</p>))
                }
                <h5>{myRecipe[0].summary}</h5>
                {
                    myRecipe[0].diets?.map(d => (<b key={idss++}>{d}</b>))
                }
                
             </div>
             : <p>Loading...</p>
            }
            <Link to='/home'><button>Return to recipes</button></Link>

        </div> 
    )


}


