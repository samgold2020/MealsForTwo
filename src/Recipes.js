import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

//Pages
import RecipeDetails from './RecipeDetails'

const Recipes = ({ recipes, setRecipes, searchString, setSearchString, getRecipes }) => {

    const handleChange = (event) => {
        setSearchString(event.target.value)
    }

    if (!recipes) {
        return null;
    }

    return (
        <>
        <header className="search-bar">
        <form onSubmit={getRecipes} >
            <input type="text" name="ingredient" value={searchString} onChange={handleChange}></input>
            <button>Search by Ingredient</button>
        </form>
        </header>
        <section className="container">
        <br></br>
            {recipes.map((recipe) => {
                return (
            <Link to={`/details/${recipe.idMeal}`} key={recipe.idMeal} >
            <div className="card">
                <div className="card-image">
                <img
                src={recipe.strMealThumb}
                alt="photo"></img>
            </div>
                <div className="card-title">
                <h2>{recipe.strMeal}</h2>
                </div>
            </div>
            </Link>
                )
            })}
        </section>
        </>
 
    );
};

export default Recipes;