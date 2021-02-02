import React from 'react'

export function RecipeList({ recipes }) { 
  return (
    <ul>
      {recipes.map(recipe => (
        <li key={recipe.name}><RecipeCard recipe={recipe}/></li>
      ))}
    </ul>
  )
}


export function RecipeCard({recipe}) { 
  return (
    <div>
      <h2>{recipe.name}</h2>
      <h4>{`${recipe.brewTimeMinutes}:${recipe.brewTimeSeconds < 10 ? '0' + recipe.brewTimeSeconds : recipe.brewTimeSeconds} ${recipe.coffeeWeight ? ' | ' + recipe.coffeeWeight + 'g ' : ''}`}</h4>
      <h4>{ `${recipe.vessel ? recipe.vessel : ''}` }</h4>
    </div>
  )
}
