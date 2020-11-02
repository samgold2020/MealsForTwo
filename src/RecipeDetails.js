import React, { useState, useEffect } from 'react';


const RecipeDetails = ({ match }) => {
    
    const [recipe, setRecipe] = useState(null)

    const searchID = match.params.idMeal

    const mealDetailsURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${searchID}`

    useEffect(() => {  

          fetch(mealDetailsURL)
          .then(res => res.json())
          .then (res => {
            setRecipe(res.meals[0])
            console.log(res)
          })
          .catch(err => {
              console.error(err)
          })
      }, []);

      if (!recipe){
          return null;
      }

    return (
        <div className="details-container">
            <img className="card-back"
            src={recipe.strMealThumb}
            alt={recipe.strMeal}/>
        <div className="details">
            <p>{recipe.strMeal} - {recipe.strArea}</p>
            <ul className="ingredient-details">
                <li>{recipe.strMeasure1} {recipe.strIngredient1}</li>
                <li>{recipe.strMeasure2} {recipe.strIngredient2}</li>
                <li>{recipe.strMeasure3} {recipe.strIngredient3}</li>
                <li>{recipe.strMeasure4} {recipe.strIngredient4}</li>
                <li>{recipe.strMeasure5} {recipe.strIngredient5}</li>
                <li>{recipe.strMeasure6} {recipe.strIngredient6}</li>
                <li>{recipe.strMeasure7} {recipe.strIngredient7}</li>
                <li>{recipe.strMeasure8} {recipe.strIngredient8}</li>
                <li>{recipe.strMeasure9} {recipe.strIngredient9}</li>
                <li>{recipe.strMeasure10} {recipe.strIngredient10}</li>
                { recipe.strIngredient11 && <li>{recipe.strMeasure11} {recipe.strIngredient11}</li>}
                <br></br>
                <li> <b>Instructions:</b> {recipe.strInstructions}</li>
                </ul>
        </div>
        </div>
    );
};

export default RecipeDetails;