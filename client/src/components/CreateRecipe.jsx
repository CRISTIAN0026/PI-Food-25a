import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import {addRecipe, getDietTypes} from '../redux/actions';

export default function CreateRecipe () {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const diets = useSelector(state => state.diets)

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        image: '',
        steps: '',
        diets: []
    })

    useEffect(() => {
        dispatch(getDietTypes())
    },[])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
    }

    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addRecipe(input))
        alert("Recipe Created")
        setInput({
        name: '',
        summary: '',
        healthScore: '',
        image: '',
        steps: '',
        diets: []
        })
        nav("/home", { replace : true });
    }

    return (
        <div>
            <Link to='/home'><button>Return Home</button></Link>
            <h1>Create your recipe</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <div>
                    <label >Name</label>
                    <input 
                    type="text"
                    value={input.name}
                    name='name' 
                    onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Summary</label>
                    <textarea name="summary" cols="30" rows="3" value={input.summary} onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Health Score</label>
                    <input type="number" name="healthScore" value={input.healthScore} onChange={e => handleChange(e)}/>
                </div>
                <div>
                    <label>Steps</label>
                    <textarea name="steps"  cols="40" rows="4" onChange={e =>handleChange(e)}></textarea>
                </div>
                <div>
                    <label>image</label>
                    <input 
                    type="text"
                    value={input.image} 
                    name='image'
                    onChange={e => handleChange(e)}
                    />
                </div>
                <div>
                <select onChange={e => handleSelect(e)}>
                    {diets.map((d) => (
                        <option value={d.name}>{d.name}</option>
                    ))}
                </select>
                <ul><li>{input.diets.map(e => e + " ,")}</li></ul>
                </div>
                <button type="submit">Create recipe</button>
            </form>
        </div>
    )
}


