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
    // console.log(recipes)

    return (
        <>
        <section className="container">
        <form onSubmit={getRecipes}>
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
                <p>{recipe.strMeal} {recipe.idMeal}</p>
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


//1. Recipes needs to have a form where words are submitted and if conditions
//are met it returns a recipe containing that key word.
//2. The results need to map through recipes to return an if/else statement
//3. The input needs to have a submit button and event.preventDefault
//4. Some message needs to popup if a match isn't found
//5. As of Tuesday morning array is found in Recipes function
