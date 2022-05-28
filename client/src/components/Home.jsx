import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getRecipes} from '../redux/actions';
import {Link} from 'react-router-dom';


export default Home = () => {
    
    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.recipes)

    useEffect(()=>{
        dispatch(getRecipes());
    },[])

    const handleClick = e => {
        e.preventDefault()
        dispatch(getRecipes())
    }
    return(
        <div>
        <Link to='/recipe'>Create Recipe</Link>
        <h1>Cooking Recipes</h1>
        <button onClick={e =>{handleClick(e)}}>Return all recipes</button>
        <div>
            
        </div>
        </div>
    )
}


