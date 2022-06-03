import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes, dietTypeFilter, orderAlphabetically, sortByHealthy } from '../redux/actions';
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginated from './Paginated';
import SearchBar from './SearchBar';

let prevId = 1

export default function Home() {
    
    const dispatch = useDispatch();
    const allRecipes = useSelector(state => state.recipes);
    const [currentPage, setPage] = useState(1);
    const [recipeForPage, setRecipeForPage] = useState(9);
    const [order, setOrder] = useState('')

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

    function handleAlphabeticalSort(e) {
        e.preventDefault();                
        dispatch(orderAlphabetically(e.target.value))
        setPage(1);
        setOrder(`Order ${e.target.value}`);
    }
    
    function handleScoreSort(e) {
        e.preventDefault();                
        dispatch(sortByHealthy(e.target.value));
        setPage(1);
        setOrder(`Order ${e.target.value}`);
    }

    
    return(
        <div>
        <Link to='/recipe'>Create Recipe</Link>
        <h1>Cooking Recipes</h1>
        <button onClick={e =>{handleClick(e)}}>Return all recipes</button>
        <div>
        <select onChange={e => handleFilterDiets(e)} defaultValue='Select a diet'>
            <option value='Select a diet' disabled >Select a diet</option>
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
            <select onChange={e => handleAlphabeticalSort(e)} defaultValue='A Z'>
            <option value='A Z' disabled>A Z</option>
                <option value='az'>Sort ascending</option>
                <option value='za'>Sort descending</option>
            </select>
            <select onChange={e => handleScoreSort(e)} defaultValue='Sort Healthy Score'>
                    <option value='Sort Healthy Score' disabled>Sort Healthy Score</option>
                    <option value="asc">From Min to Max</option>
                    <option value="desc">From Max to Min</option>
            </select>
            <Paginated 
            recipeForPage={recipeForPage}
            allRecipes={allRecipes.length}
            paginated={paginated}
            />
            <SearchBar/>
            <div>
                {
                currentRecipes?.map(e => {
                    return(
                    <div key={prevId++}> 
                        <Link to={'/home/' + e.id}>
                    <Card name={e.name} image={e.image ? e.image :'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'} diets={e.diets ? e.diets : e.Diets[0].name} key={e.id}/>
                    </Link>
                    </div>
                )
            })
        }
        </div>
        </div>
        </div>
    )
}


