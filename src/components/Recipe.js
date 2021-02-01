import React from 'react'
import PropTypes from 'prop-types'

class SelectOption extends React.Component { 
  render() { 
    const { min, max, label, value, onChange } = this.props
    let selectWrapper = []
    
    for (let i = min; i <= max; i++) { 
      selectWrapper.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <div>
        <label htmlFor={`selectInput${label}`} className='recipe-label'>
          { label }
        </label>
        <select id={`selectInput${label}`} name={value} onChange={onChange}>
        { selectWrapper.map((item)=>item)}
        </select>
      </div>
    )
  }
}

SelectOption.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  myfunction: PropTypes.func.isRequired
}

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
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  myTest = () => { 
    console.log("test")
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
              id='name'
              name='name'
              className={`input-name`}
              placeholder='Recipe Name'
              autoComplete='off'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <SelectOption min={0} max={10} value="brewTimeMinutes" label="Minutes" onChange={this.handleChange} />
          <SelectOption min={0} max={59} value="brewTimeSeconds" label="Seconds" onChange={this.handleChange}/>
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
