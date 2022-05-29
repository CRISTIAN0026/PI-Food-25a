import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Welcome to Cooking Recipes</h1>
            <Link to='/home'>
            <button>See recipes</button>
            </Link>
        </div>
    )
}
