import React from 'react'

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
        <button>Add Recipe</button>
      </div>
    )
  }
}