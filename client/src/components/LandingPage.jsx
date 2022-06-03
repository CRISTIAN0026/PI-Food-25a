import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="Page">
            <h1 className="h1">Welcome to Cooking Recipes</h1>
            <Link to='/home'>
            <button className="button">See recipes</button>
            </Link>
        </div>
    )
}

