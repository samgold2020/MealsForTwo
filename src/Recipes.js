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
        <section className="container">
        <form onSubmit={getRecipes} className="search-bars">
            <input type="text" name="ingredient" value={searchString} onChange={handleChange}></input>
            <button>Search by Ingredient</button>
        </form>
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



