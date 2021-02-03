import React from 'react'
import { Link } from 'react-router-dom'
import { RecipeList } from './Recipe'
import '../styles/_variables.scss'
import '../styles/_global.scss'

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
      <div className='flex-center column'>
        <h1>Coffee Timer</h1>
        {recipes && <RecipeList recipes={recipes} />}
        {recipes == null && <h2>No Recipes</h2>}
        <div class='fixed-btn'>
          <Link className={`${'light'}-btn add-btn`} to={{pathname: '/recipe/add'}}>Add Recipe +</Link>
        </div>
      </div>
    )
  }
}
