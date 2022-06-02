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
                <img src={myRecipe[0].image ? myRecipe[0].image :'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} alt='' width='500px' height='500px'/>
                {
                typeof myRecipe[0].steps === 'string' ? myRecipe[0].steps : myRecipe[0].steps?.map(s => ( <p key={ids++}>{s.number} : {s.step}</p>))
                }
                <h3>{myRecipe[0].healthScore}</h3>
                <h5>{myRecipe[0].summary}</h5>
                {
                myRecipe[0].diets ?  myRecipe[0].diets?.map(d => (<b key={idss++}>{d}</b>)) : myRecipe[0].Diets.map(d =>(<b>{d.name}</b>))
                }
                
            </div>
            : <p>Loading...</p>
            }
            <Link to='/home'><button>Return to recipes</button></Link>

        </div> 
    )


}


