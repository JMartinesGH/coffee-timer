import React from 'react'
import { Link } from 'react-router-dom'
import { RecipeList } from './Recipe'
import { ThemeConsumer } from '../contexts/theme'
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
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <div className='flex-center column'>
            <div className='row space-between'>
              <h1>Coffee Timer</h1>
              <button
                style={{ fontSize: 30 }}
                className='btn-clear'
                onClick={ toggleTheme }
              >
                { theme === 'light' ? '🔦' : '💡' }
              </button>
            </div>
            {recipes && <RecipeList recipes={recipes} />}
            {recipes == null && <h2>No Recipes</h2>}
            <div class='fixed-btn'>
              <Link className={`${theme}-btn add-btn`} to={{pathname: '/recipe/add'}}>Add Recipe +</Link>
            </div>
          </div>
        )}
      </ThemeConsumer>
    )
  }
}
