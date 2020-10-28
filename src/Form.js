import React, {useState, useEffect} from 'react';

//pages
import Recipes from './Recipes'


const Form = ({ recipes, setRecipes }) => {

    const getRecipes = (event) => {
        const mainIngredient = event.target.ingredient.value
        event.preventDefault()
        console.log(mainIngredient)
      }

    return (
    <>
        <form onSubmit={getRecipes}>
            <input type="text" name="ingredient"/>
            <button>Search by Ingredient</button>
        </form>
        <Recipes recipes={recipes} setRecipes={setRecipes} getRecipes={getRecipes}/>
    </>

    );
};

export default Form;