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
        <select>
                    <option disabled selected>Select...</option>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Keto</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="lacto vegetarian">Lacto-Vegetarian</option>
                    <option value="ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescetarian">Pescetarian</option>
                    <option value="paleolithic">Paleo</option>
                    <option value="primal">Primal</option>
                    <option value="low fodmap">Low FODMAP</option>
                    <option value="whole 30">Whole30</option>
                    <option value="dairy free">Dairy Free</option>
            </select>
            <select>
                <option disabled selected>Alphabetically</option>
                <option value='asc'>Sort ascending</option>
                <option value='desc'>Sort descending</option>
            </select>
            <select>
                    <option disabled selected>Health Score</option>
                    <option value="asc">From Min to Max</option>
                    <option value="desc">From Max to Min</option>
                </select>
        </div>
        </div>
    )
}


