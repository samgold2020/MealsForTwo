import React, { useState } from 'react';
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
import Form from './Form'


function App() {

  const [recipes, setRecipes] = useState ('')
  const [random, setRandom] = useState ([])

  const getRecipes = (event) => {
    const mainIngredient = event.target.ingredient.value
    event.preventDefault()
    console.log(mainIngredient)
  }

  return (
    <>
    <Router>
      
    </Router>
    <header>
      <h1>Recipes For You</h1>
      </header>
        <Form getRecipes={getRecipes}/>
      <main>
      <Recipes recipes={recipes} setRecipes={setRecipes} />
      <RandomRecipe random={random} setRandom={setRandom} />
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