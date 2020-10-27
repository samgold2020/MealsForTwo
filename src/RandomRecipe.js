import React, { useState, useEffect } from 'react';

const randomAPI =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`

const RandomRecipe = ({ random, setRandom }) => {

    useEffect(() => {
        const url = `${randomAPI}`

        fetch(url)
        .then(res => res.json())
        .then(res => {
            setRandom(res)
            // console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    //returns an array of a random meal

    if (!random) {
        return null;
    }

    // console.log(this)
    const randomRecipeButton = (event) => {
        event.preventDefault()
        console.log("Clicked!")
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