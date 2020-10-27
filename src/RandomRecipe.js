import React, { useState } from 'react';


const RandomRecipe = ({ random, setRandom }) => {

    const updateRandomRecipe = (event) => {
    }

    return (
        <div>
            <button>Generate a Random Recipe</button>
        </div>
    );
};

export default RandomRecipe;

//1. If a recipe is not liked there should be a "generaate another" button
//2. Should this include math.random for the random recipe generator? 
//3. This is a button which returns some recipe after the submit="onclick"