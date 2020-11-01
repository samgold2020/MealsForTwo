import React, { useState, useEffect } from 'react';
import { 
    BrowserRouter as Router, 
    Link, 
  } from 'react-router-dom'


const RandomRecipe = ({ random, setRandom }) => {

    const randomAPI =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/random.php`

    useEffect(() => {      
     
        fetch(randomAPI)
        .then(res => res.json())
        .then (res => {
            // console.log(res)
            setRandom(res.meals[0]) //This pulls out the meal from the array
            console.log(random)
        })
        .catch(err => {
            console.error(err)
        })
    }, []);

    // const randomRecipeButton = (event) => {
    //     event.preventDefault()
    //     fetch(randomAPI)
    //     .then(res => res.json())
    //     .then (res => {
    //         // console.log(res)
    //         setRandom(res.meals)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // }

    if (!random) {
        return null;
    }

    return (
        <section>
        {/* <form onClick={RandomRecipe}>
            <button className="random-different-button">Get a Different Recipe</button>
         </form> */}
         <div className="details-container">
            <img className="card-back"
            src={random.strMealThumb}
            alt={random.strMeal}/>
        <div className="details">
            <p>{random.strMeal} - {random.strArea}</p>
            <ul>
                <li>{random.strMeasure1} {random.strIngredient1}</li>
                <li>{random.strMeasure2} {random.strIngredient2}</li>
                <li>{random.strMeasure3} {random.strIngredient3}</li>
                <li>{random.strMeasure4} {random.strIngredient4}</li>
                <li>{random.strMeasure5} {random.strIngredient5}</li>
                <li>{random.strMeasure6} {random.strIngredient6}</li>
                <li>{random.strMeasure7} {random.strIngredient7}</li>
                <li>{random.strMeasure8} {random.strIngredient8}</li>
                <li>{random.strMeasure9} {random.strIngredient9}</li>
                <li>{random.strMeasure10} {random.strIngredient10}</li>
                <li>Instructions: {random.strInstructions}</li>
            </ul>
        </div>
        </div>
         </section>
    );
};

export default RandomRecipe;