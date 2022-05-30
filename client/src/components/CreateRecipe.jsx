import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import {addRecipe, getDietTypes} from '../redux/actions';

export default function CreateRecipe () {
    const dispatch = useDispatch()
    const diets = useSelector(state => state.diets)

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: []
    })

    useEffect(() => {
        dispatch(getDietTypes())
    },[])

    return (
        <div>
            <Link to='/home'><button>Return Home</button></Link>
            <h1>Create your recipe</h1>
            <form>
                <div>
                    <label >Name</label>
                    <input 
                    type="text"
                    value={input.name}
                    name='name' />
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name="summary" cols="30" rows="3" value={input.summary}/>
                </div>
                <div>
                    <label>Health Score</label>
                    <input type="number" name="healthScore" value={input.healthScore} />
                </div>
                <div>
                    <label>Steps</label>
                    <textarea name="steps"  cols="40" rows="4"></textarea>
                </div>
                <div>
                    <label>image</label>
                    <input 
                    type="text"
                    value={input.image} 
                    name='image'
                    />
                </div>
                <div>
                <select>
                    {diets.map((d) => (
                        <option value={d.name}>{d.name}</option>
                    ))}
                </select>
                </div>
                <button type="submit">Create recipe</button>
            </form>
        </div>
    )
}


