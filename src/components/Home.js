import React from 'react'
import { Link } from 'react-router-dom'

function RecipeList({ recipes }) { 
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.name}><RecipeCard recipe={recipe}/></li>
      ))}
    </ul>
  )
}

function RecipeCard({recipe}) { 
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h4>{`${recipe.brewTimeMinutes}:${recipe.brewTimeSeconds<10? '0' + recipe.brewTimeSeconds : recipe.brewTimeSeconds}`}</h4>
    </div>
  )
}

export default class Popular extends React.Component { 
  state = {
    recipes: null,
  }
  componentDidMount() { 
    // get local storage
    let storage = window.localStorage
    // get existing data if it exists and convert to array
    let recipes = storage.getItem('coffeeTimerRecipes')
    recipes = recipes ? JSON.parse(recipes) : null
    // set state
    this.setState({
      recipes
    })
  }
  render() { 
    const { recipes } = this.state 

    return (
      <div>
        <h1>Coffee Timer</h1>
        {recipes && <RecipeList recipes={recipes} />}
        {recipes == null && <h2>No Recipes</h2>}
        <Link to={{pathname: '/recipe/add'}}>Add Recipe</Link>
      </div>
    )
  }
}
