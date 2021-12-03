import React, {useEffect, useState}from "react";
import Recipe from "./Recipe";
import './App.css';
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import register from './pages/register';
import SignIn from './pages/signin';
import profile from './pages/profile';

const App = () => {
  
  const APP_ID = 'c9234833';
  const APP_KEY = '58ee92745df07e59d1b074a5dd9edde3'; 

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState(' ');
  const [query, setQuery] = useState('')
  

  

  useEffect(() =>{
    getRecipes();
    
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID }&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

  }

 

  return(
    <div className="App">
      <Router>
        
      <Navbar />
      
      <Routes>
      
        {/* <Route path='/profile' element={profile} /> */}
        <Route path='/signin' element={SignIn} />
        <Route path='/events' element={register} />
        
      </Routes>
    </Router>
  
      
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder="Enter main Ingredient" />
        <button className="search-button"type="submit">Search</button>

      </form>
      <div className="recipes">
      {recipes.map(recipe =>(
        <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        />
      ))}
      </div>
    </div>
  );
      };

export default App;
