import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from 'react-router-dom'

//Pages
import Recipes from './Recipes'
import RandomRecipe from './RandomRecipe'
import Footer from './Footer'
import RecipeDetails from './RecipeDetails'

function App() {
  
  //State
  const [recipes, setRecipes] = useState ('')
  const [random, setRandom] = useState ([])
  const [searchString, setSearchString] =useState('')
  
  const ingredientURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${searchString ? searchString : 'chicken'}` //Esin helped with the ternary!
  useEffect(() => {      
     
        fetch(ingredientURL)
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
      event.preventDefault()
        fetch(ingredientURL)
        .then(res => res.json())
        .then (res => {
            // console.log(res)
            setRecipes(res.meals)
        })
        .catch(err => {
            console.error(err)
        })
      }

  return (
    <>
    <header className="random-recipe">
      <h1>
        <a href="/">Recipes For You</a>
        </h1>
      <RandomRecipe random={random} setRandom={setRandom} />
      </header>
      <main>
        <Recipes recipes={recipes} setRecipes={setRecipes} searchString={searchString} setSearchString={setSearchString} getRecipes={getRecipes} />
        <Route path="/" exact component={Recipes}/>
        <Route path="/details/:idMeal"  render={(routerProps) => {
          return(
          <RecipeDetails 
          match={routerProps.match}
          />
          )}}
          />
        <Footer />
      </main>
    </>

  );
}

export default App;

//1. App should contain a header with the name of the app
//That is also a home link with a /Home path
//2. App should contian a three line menu within that menu 
// should be the random recipe generator, an "about the app/api", and 
//a "contact us"