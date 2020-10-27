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


console.log(setRecipes)

    return (
        <div className='RecipeSearch'>
            <p>Recipes Search</p>
        <Recipe recipes={recipes} setRecipes={setRecipes}/>
        </div>
    );
};

export default Recipes;