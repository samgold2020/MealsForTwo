import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, 
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
  const [searchString, setSearchString] =useState('chicken')
  const [searchID, setSearchID] =useState('')
  
  const ingredientURL =`https://www.themealdb.com/api/json/v2/${process.env.REACT_APP_API_KEY}/filter.php?i=${searchString}` 
  useEffect(() => {      
     
        fetch(ingredientURL)
        .then(res => res.json())
        .then (res => {
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
            setSearchID(res.meals.idMeal)
            console.log(res.meals.idMeal) 
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
        <a href="/random/" className="random-button"><button>Get a Random Recipe!</button></a> 
      </header>
      <main>
      <Route path="/random/" render={() => {
        return(
          <RandomRecipe 
          random={random} 
          setRandom={setRandom}/>
        )
      }}  
      />
        <Route path="/" exact render={() => {
          return (
            <Recipes 
            recipes={recipes} 
            setRecipes={setRecipes} 
            searchString={searchString} 
            setSearchString={setSearchString} 
            getRecipes={getRecipes} 
            /> 
          )
        }}/>
        <Route path="/details/:idMeal" render={(routerProps) => {
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

