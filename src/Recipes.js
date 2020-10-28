import React, { useState, useEffect } from 'react';

//Pages
import RecipeDetails from './RecipeDetails'

const ingredientURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=chicken_breast`

const Recipes = ({ recipes, setRecipes }) => {

    useEffect(() => {   
        const url = `${ingredientURL}`
     
        fetch(url)
        .then(res => res.json())
        .then (res => {
            // console.log(res)
            setRecipes(res.meals)
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

    const getRecipes = (event) => {
        const mainIngredient = event.target.ingredient.value
        event.preventDefault()
        console.log(mainIngredient)
        const data = `${ingredientURL}`
        console.log({data})
      }

    if (!recipes) {
        return null;
    }
    console.log(recipes)

    return (
        <>
        <section className="container">
        <form onSubmit={getRecipes}>
            <input type="text" name="ingredient"/>
            <button>Search by Ingredient</button>
        </form>
            {/* {recipes.map((recipe) => {
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
            })} */}
            
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
