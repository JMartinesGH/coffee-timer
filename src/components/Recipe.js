import React from 'react'


export default class Recipe extends React.Component { 
  state = {
    name: '',
    vessel: '',
    coffeeWeight: '',
    waterWeight: '',
    brewTimeMinutes: 0,
    brewTimeSeconds: 0,
    bloom: {
      isActive: false,
      bloomTime: 0
    }
  }
  handleSubmit = (event) => {
    event.preventDefault()

    console.log('submitted')
  }
  handelChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }
  render() { 
    let selectMinute = []
    for (let i = 0; i < 11; i++) { 
      selectMinute.push(<option key={i} value={i}>{i}</option>)
    }

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
              id='name'
              name='name'
              className={`input-name`}
              placeholder='Recipe Name'
              autoComplete='off'
              value={this.state.name}
              onChange={this.handelChange}
            />
          </div>
          <div>
          <label htmlFor='username' className='recipe-label'>
            Minutes
          </label>
          <select name={this.state.brewTimeMinutes} onChange={this.handleChange}>
          { selectMinute.map((item)=>item)}
          </select>
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
