import React from 'react'

export default class Recipe extends React.Component { 
  state = {
    name: '',
    vessel: '',
    coffeeWeight: '',
    waterWeight: '',
    brewTime: '',
    bloom: {
      isActive: false,
      bloomTime: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()

    console.log('submitted')
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  render() { 
    return (
      <div>
        <h1>Create a Recipe</h1>
        <form className='recipe' onSubmit={this.handleSubmit}>
            <label htmlFor='username' className='recipe-label'>
              Nickname
            </label>
            <div className='row recipe-inputs'>
              <input
                type='text'
                id='username'
                className={`input-name`}
                placeholder='Recipe Name'
                autoComplete='off'
                value={this.state.name}
                onChange={this.handleNameChange}
              />
          </div>
          <div>
            <button
                className={`btn `}
                type='submit'
                disabled={!this.state.name}
              >
                Add Recipe
              </button>
          </div>
          </form>
      </div>
    )
  }
}
