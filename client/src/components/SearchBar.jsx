import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import  { getRecipesByName }  from '../redux/actions';
import './SearchBar.css'

export default function SearchBar() {
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    const handleInputChange =(e) =>{
        e.preventDefault()
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getRecipesByName(name))
    }

    return(
        <div className='search'>
            <input
            type='text'
            placeholder='Search recipe...'
            onChange={e => handleInputChange(e)}
            id='input'
            />
            <button type='submit' id='but' onClick={e => handleSubmit(e)}>Search</button>
        </div>
    )


}