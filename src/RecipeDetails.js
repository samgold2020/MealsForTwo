import React, { useState, useEffect } from 'react';


const RecipeDetails = ({ match }) => {
    
    const [recipe, setRecipe] = useState(null)
    const [searchID, setSearchID] =useState('')
    
    useEffect(() => {  

        const mealDetailsURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/lookup.php?i=${searchID ? searchID : '52772'}`

          fetch(mealDetailsURL)
          .then(res => res.json())
          .then (res => {
              // console.log(res)
              setRecipe(res.meals)
          })
          .catch(err => {
              console.error(err)
          })
      }, []);

      if (!recipe){
          return null;
      }

      console.log(recipe);
    return (
        <div className="details-container">
            <img
            src={recipe.strMealThumb}
            alt="photo"></img>
        <div className="details">
            <p>{recipe.idMeal}</p>
        </div>
        </div>
    );
};

export default RecipeDetails;