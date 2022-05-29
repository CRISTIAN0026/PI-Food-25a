import React from "react";
import { Link } from 'react-router-dom';

export const LandingPage = () => {
    return (
        <div>
            <h1>Welcome to Cooking Recipes</h1>
            <Link to='/home'>
            <button>See recipes</button>
            </Link>
        </div>
    )
}

