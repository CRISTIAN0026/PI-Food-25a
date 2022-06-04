import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import {addRecipe, getDietTypes} from '../redux/actions';
import './CreateRecipe.css'

function validate(input) {
    const errors = {};
    if (!input.name) errors.name = 'please complete with a recipe name';
    if (!input.summary) errors.summary = 'please add some comments about your recipe';
    if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'please rate the healthy diet between 1 and 100';
    if (!input.steps) errors.steps = 'Please detail the steps for your recipe';
    if(input.diets.length < 1) errors.diets = "you have to add at least one diet"
    return errors;
};

let ide =500
export default function CreateRecipe () {
    const dispatch = useDispatch()
    const nav = useNavigate()
    const dieta = useSelector(state => state.diets)

    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: []
    })

    useEffect(() => {
        dispatch(getDietTypes())
    },[dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleSelect(e) {
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
    }
    function handleSubmit(e) {
        e.preventDefault()
        if(errors.name || errors.summary || errors.healthScore || errors.steps || errors.diets || (input.name === '')) return alert("Missing required fields!")
        dispatch(addRecipe(input))
        alert("Recipe Created")
        setInput({
        name: '',
        summary: '',
        healthScore: '',
        steps: '',
        diets: []
        })
        nav("/home", { replace : true });
    }

 

    function handleDelete(e) {
        setInput({
            ...input,
            diets: input.diets.filter(d => d !== e)
        })
    }
return (
        <div className="recipe">
            <h1>Create your recipe</h1>
            <div id="form">
            <form onSubmit={e => handleSubmit(e)} >
                <div className="name">
                    <label >Name</label>
                    <input 
                    type="text"
                    value={input.name}
                    name='name' 
                    onChange={e => handleChange(e)}/>
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
                </div>
                <div id="select">
                <select onChange={e => handleSelect(e)} >
                    {dieta.map((d) => (
                        <option key={d.id} value={d.name}>{d.name }</option>
                    ))}
                </select>
                {errors.diets && (
                        <p>{errors.diets}</p>
                    )}
                </div>
                {input.diets.map(e => 
            <div key={ide++} className="name">
                <p >{e}</p>
                <button  onClick={() => handleDelete(e)}>x</button>
            </div>)
            }
                <div className="name">
                    <label>Summary</label>
                    <textarea name="summary" cols="30" rows="3" value={input.summary} onChange={e => handleChange(e)}/>
                    {errors.summary && (
                        <p>{errors.summary}</p>
                    )}
                </div>
                <div className="name">
                    <label>Health Score</label>
                    <input type="number" name="healthScore" value={input.healthScore} onChange={e => handleChange(e)}/>
                    {errors.healthScore && (
                        <p>{errors.healthScore}</p>
                    )}
                </div>
                <div className="name1">
                    <label>Steps</label>
                    <textarea name="steps"  cols="40" rows="4" value={input.steps} onChange={e =>handleChange(e)}></textarea>
                    {errors.steps && (
                        <p>{errors.steps}</p>
                    )}
                </div>
                <button type="submit" className="btn">Create recipe</button> <Link to='/home'><button className="btn1">Return Home</button></Link>
            </form>
            </div>
            
        </div>
    )
}


