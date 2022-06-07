import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, } from 'react-redux';
import {addRecipe, getDietTypes} from '../redux/actions';
import './CreateRecipe.css'

function validate(input) {
    const errors = {};
    if (input.name.length < 2 ) errors.name = 'Add recipe name';
    if (input.summary.length < 2) errors.summary = 'Add recipe summary';
    if (input.healthScore < 1 || input.healthScore > 100) errors.healthScore = 'Add healthy score';
    if (input.steps.length < 2) errors.steps = 'Add important steps';
    if(input.diets.length < 1){
        errors.diets = "Add at least one diet"
    }else if(input.diets.length > 11) {
        errors.diets = "Diet limit reached"
    }
    return errors;
};

let ide = 151
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
        if(errors.name || errors.summary || errors.healthScore || errors.steps || errors.diets || (input.name === '')) return alert("faltan datos")
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
            <h1 id='ku'>Create your recipe</h1>
            <div id="our">
            <form onSubmit={e => handleSubmit(e)} id="form">
            <div id="select15">
                    <div>
                <select onChange={e => handleSelect(e)} >
                    {dieta.map((d) => (
                        <option key={d.id} value={d.name}>{d.name }</option>
                    ))}
                </select>
                </div>
            <div id="hy">
                {errors.diets && (
                        <p className="fo" id="dsa">{errors.diets}</p>
                    )}
                    </div>
                </div>
                <div id="n">
                    <div id='nam'>
                    <label >Name</label>
                    </div>
                    <div>
                    <input 
                    type="text"
                    value={input.name}
                    name='name' 
                    onChange={e => handleChange(e)}
                    id='n1'
                    />
                    </div>
                    <div  id='n2'>
                    {errors.name && (
                        <p className="fo">{errors.name}</p>
                    )}
                    </div>
                </div>
                <div id="suma">
                    <div>
                    <label>Summary</label>
                    </div>
                    <div>
                    <textarea id="sum1" name="summary" cols="50" rows="5" value={input.summary} onChange={e => handleChange(e)}/>
                    </div>
                    <div id="sum2">
                    {errors.summary && (
                        <p className="fo">{errors.summary}</p>
                    )}
                    </div>
                </div>
                <div className="health">
                    <div>
                    <label>Health Score</label>
                    </div>
                    <div>
                    <input type="number" id="health1" name="healthScore" value={input.healthScore} onChange={e => handleChange(e)}/>
                    </div>
                    <div id="health2">
                    {errors.healthScore && (
                        <p className="fo">{errors.healthScore}</p>
                    )}
                    </div>
                </div>
                <div className="ste">
                    <div>
                    <label>Steps</label>
                    </div>
                    <div>
                    <textarea name="steps" id="ste1" cols="40" rows="4" value={input.steps} onChange={e =>handleChange(e)}></textarea>
                    </div>
                    <div id="ste2">
                    {errors.steps && (
                        <p className="fo">{errors.steps}</p>
                    )}
                    </div>
                </div>
                <div id="re">
                <div >
                <button type="submit" className="btn01">Create recipe</button>
                </div>
                <div id="re1">
                <Link to='/home'><button className="btn1">Return Home</button></Link>
                </div>
                </div>
            </form>
            <div>

            </div>
            <h3 id="ik">Diets: </h3>
            <div id="lo">
                {input.diets.map(e => 
            <div key={ide++} className="nlso">
                <div>
                <p id="gtd1">{e}</p>
                </div>
                <div className="gtdj">
                <button id="gtd"  onClick={() => handleDelete(e)}>x</button>
                </div>
            </div>)
            }
            </div>
            
            </div>
            
        </div>
    )
}


