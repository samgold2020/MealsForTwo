import React, { useState, useEffect } from 'react';

//Pages
import RecipeDetails from './RecipeDetails'

const Recipes = ({ recipes, setRecipes, searchString, setSearchString, getRecipes }) => {
    
    // useEffect(() => { 
         
    // const ingredientURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${searchString}`
     
    //     fetch(ingredientURL)
    //     .then(res => res.json())
    //     .then (res => {
    //         // console.log(res)
    //         setRecipes(res.meals)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // }, []);

    // const getRecipes = (event) => {
    //     const mainIngredient = event.target.ingredient.value
    //     event.preventDefault()
    //     setSearchString(mainIngredient)
    //   }

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
            <div className="card">
                <div className="card-image">
                <img
                src={recipe.strMealThumb}
                alt="photo"></img>
            </div>
                <div className="card-title">
                <p>{recipe.strMeal}</p>
                </div>
            </div>
                )
            })}
            
        <RecipeDetails recipes={recipes} setRecipes={setRecipes}/>
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
