import React, { useState } from 'react';
import './App.css';
import Recipes from './Recipes'
import RandomRecipe from './RandomRecipe'
import Footer from './Footer'

function App() {

  const [recipes, setRecipes] = useState ('Sam')
  const [random, setRandom] = useState ('')

  return (
    <div>
    <header>
      <h1>Recipes For You</h1>
      </header>
      <Recipes recipes={recipes} setRecipes={setRecipes} />
      <RandomRecipe random={random} setRandom={setRandom} />
      <Footer />
      </div>

  );
}

export default App;
