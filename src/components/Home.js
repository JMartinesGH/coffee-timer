import React from 'react'
import { Link } from 'react-router-dom'

function RecipeList({ recipes }) { 
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.id}>{ recipe.name }</li>
      ))}
    </ul>
  )
}

export default class Popular extends React.Component { 
  state = {
    recipes: [
      {
        name: 'test recipe',
        id: '1'
      }
    ],
  }
  
  render() { 
    const { recipes } = this.state 

    return (
      <div>
        <h1>Coffee Timer</h1>
        {recipes && <RecipeList recipes={recipes}/>}
        <Link to={{pathname: '/recipe/add'}}>Add Recipe</Link>
      </div>
    )
  }
}