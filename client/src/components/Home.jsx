import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getRecipes} from '../redux/actions';
import {Link} from 'react-router-dom';
import Card from './Card';

export default function Home() {
    
    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes);
    const [currentPage, setPage] = useState(1);
    const [recipeForPage, setRecipeForPage] = useState(9);

    const indexOfLastRecipe = currentPage * recipeForPage
    const indexOfFirstRecipe = indexOfLastRecipe - recipeForPage
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)

    const paginated = (pageNumber) => {
        setPage(pageNumber)
    }

    useEffect(()=>{
        dispatch(getRecipes());
    },[dispatch])

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
                <option value='asc'>Sort ascending</option>
                <option value='desc'>Sort descending</option>
            </select>
            <select>
                    <option>Health Score</option>
                    <option value="asc">From Min to Max</option>
                    <option value="desc">From Max to Min</option>
                </select>
                {
                allRecipes && allRecipes.map(e => {
                    return(
                    <Card name={e.name} image={e.image} diets={e.diets} key={e.id}/>
                    )
                })
                }
        </div>
        </div>
    )
}


