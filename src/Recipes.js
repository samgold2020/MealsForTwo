import React, { useState, useEffect } from 'react';
import Recipe from './Recipe'

const Recipes = ({ recipes, setRecipes }) => {

    useEffect(() => {
        const url ='https://www.themealdb.com/api/json/v1/1/categories.php'
        
        fetch(url)
        .then(res => res.json())
        .then (res => {
            console.log(res)
            setRecipes(res)
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

    return (
        <div className='RecipeSearch'>

            <p>Recipes Search</p>
        <Recipe recipes={recipes} setRecipes={setRecipes}/>
        </div>
    );
};

export default Recipes;


//1. Recipes needs to have a form where words are submitted and if conditions
//are met it returns a recipe containing that key word.
//2. The results need to map through recipes to return an if/else statement
//3. The input needs to have a submit button and event.preventDefault
//4. Some message needs to popup if a match isn't found
//5. As of Tuesday morning array is found in Recipes function
