import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, dietTypeFilter } from '../redux/actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginated from './Paginated';


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

    const handleFilterDiets = (e) => {
        e.preventDefault()
        dispatch(dietTypeFilter(e.target.value))
        setPage(1)
    }


    return(
        <div>
        <Link to='/recipe'>Create Recipe</Link>
        <h1>Cooking Recipes</h1>
        <button onClick={e =>{handleClick(e)}}>Return all recipes</button>
        <div>
        <select onChange={e => handleFilterDiets(e)}>
                    <option value="gluten free">Gluten Free</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="lacto vegetarian">Lacto-Vegetarian</option>
                    <option value="ovo vegetarian">Ovo-Vegetarian</option>
                    <option value="lacto ovo vegetarian">Lacto-Ovo-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="low fodmap">Low FODMAP</option>
                    <option value="whole 30">Whole 30</option>
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
            <Paginated 
            recipeForPage={recipeForPage}
            allRecipes={allRecipes.length}
            paginated={paginated}
            />
                {
                currentRecipes?.map(e => {
                    return(
                    <Card name={e.name} image={e.image} diets={e.diets} key={e.id}/>
                    )
                })
                }
        </div>
        </div>
    )
}


