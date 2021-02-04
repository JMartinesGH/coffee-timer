import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { Link } from 'react-router-dom'
import '../styles/_variables.scss'
import '../styles/recipe.scss'

export function RecipeList({ recipes }) { 
  return (
    <ul className='recipe-list'>
      {recipes.map(recipe => (
        <li key={recipe.name}><RecipeCard recipe={recipe}/></li>
      ))}
    </ul>
  )
}


export function RecipeCard({recipe}) { 
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <Link
          className={`recipe-link`}
          to={{
            pathname: '/recipe/active',
            search: `?`
          }}
        >
          <div className={`recipe-card ${theme}-card`}>
            <h2>{recipe.name}</h2>
            <h4>{ `${recipe.vessel ? recipe.vessel : ''}` }</h4>
            <h4>{`${recipe.brewTimeMinutes}:${recipe.brewTimeSeconds < 10 ? '0' + recipe.brewTimeSeconds : recipe.brewTimeSeconds} ${recipe.coffeeWeight ? ' | ' + recipe.coffeeWeight + 'g ' : ''}`}</h4>
          </div>
        </Link>
      )}
    </ThemeConsumer>
  )
}
