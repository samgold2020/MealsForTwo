import React, { useState, useEffect } from 'react';


const RandomRecipe = ({ random, setRandom }) => {

    const randomAPI =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`

    useEffect(() => {      
     
        fetch(randomAPI)
        .then(res => res.json())
        .then (res => {
            // console.log(res)
            setRandom(res.meals)
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

    const randomRecipeButton = (event) => {
        event.preventDefault()
        fetch(randomAPI)
        .then(res => res.json())
        .then (res => {
            // console.log(res)
            setRandom(res.meals)
        })
        .catch(err => {
            console.error(err)
        })
    }
    // console.log(random)

    if (!random) {
        return null;
    }

    return (
        <section>
            {/* {random.map((meal)=> {
                return (
                    <div key={meal.idMeal}>
                    </div>
                )
            })} */}
        <form onClick={randomRecipeButton}>
            <button>Generate a Random Recipe</button>
         </form>
         </section>
    );
};

export default RandomRecipe;

//1. If a recipe is not liked there should be a "generaate another" button
//2. Should this include math.random for the random recipe generator? 
//3. This is a button which returns some recipe after the submit="onclick"

//console log at 21 returns an array of a random meal with idMeal
// strArea, strCategory