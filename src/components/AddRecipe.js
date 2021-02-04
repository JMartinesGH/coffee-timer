import React from 'react'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'
import Nav from './Nav'
import '../styles/form.scss'

class SelectOption extends React.Component { 
  render() { 
    const { min, max, label, value, onChange } = this.props
    let selectWrapper = []
    
    for (let i = min; i <= max; i++) { 
      selectWrapper.push(<option key={i} value={i}>{i}</option>)
    }

    return (
      <div className='select-input'>      
        <label htmlFor={`select-input-${label}`} className='recipe-label'>
          { label }
        </label>
        <select id={`select-input-${label}`} name={value} onChange={onChange} >
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
  onChange: PropTypes.func.isRequired
}

export default class Recipe extends React.Component { 
  state = {
    name: '',
    vessel: '',
    coffeeWeight: '',
    waterWeight: '',
    brewTimeMinutes: 0,
    brewTimeSeconds: 0,
    bloom: false
  }
  handleSubmit = (event) => {
    event.preventDefault()

    // get local storage
    let storage = window.localStorage
    // get existing data if it exists and convert to array
    let existing = storage.getItem('coffeeTimerRecipes')
    existing = existing ? JSON.parse(existing) : []
    // push new recipe to array
    existing.push(this.state)
    // push back up to local storage
    storage.setItem('coffeeTimerRecipes', JSON.stringify(existing))
    // reset
    this.setState({
      name: '',
      vessel: '',
      coffeeWeight: '',
      waterWeight: '',
      brewTimeMinutes: 0,
      brewTimeSeconds: 0,
      bloom: false
    })

    window.alert('Recipe Added')
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() { 
    return (
      <ThemeConsumer>
        {({theme})=>(
          <div className='flex-center column'>
          <Nav />
          <h1>Create a Recipe</h1>
          <form className='recipe-form' onSubmit={this.handleSubmit}>
            <div className='flex-center column recipe-inputs'>
              <div className='row recipe-input space-between'>
                <label htmlFor='username' className='recipe-label'>
                  Nickname
                </label>
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
              <div className='row recipe-input space-between'>
                <label htmlFor='username' className='recipe-label'>
                  Vessel
                </label>
                <input
                  type='text'
                  id='vessel'
                  name='vessel'
                  className={`input-name`}
                  placeholder='Vessel'
                  autoComplete='off'
                  value={this.state.vessel}
                  onChange={this.handleChange}
                  />
              </div>
              <div className='row recipe-input space-between'>
                <label htmlFor='username' className='recipe-label'>
                  Coffee Weight
                </label>
                <input
                  type='text'
                  id='coffeeWeight'
                  name='coffeeWeight'
                  className={`input-name`}
                  placeholder='(grams)'
                  autoComplete='off'
                  value={this.state.coffeeWeight}
                  onChange={this.handleChange}
                  />
              </div>
              <div className='row recipe-input space-between'>
                <label htmlFor='username' className='recipe-label'>
                  Water Weight
                </label>
                <input
                  type='text'
                  id='waterWeight'
                  name='waterWeight'
                  className={`input-name`}
                  placeholder='(grams)'
                  autoComplete='off'
                  value={this.state.waterWeight}
                  onChange={this.handleChange}
                  />
              </div>
                <div className='row recipe-input flex-center space-around'>
                <SelectOption min={0} max={10} value="brewTimeMinutes" label="Minutes" onChange={this.handleChange} />
                <SelectOption min={0} max={59} value="brewTimeSeconds" label="Seconds" onChange={this.handleChange}/>
              </div>
              <div className='fixed-btn'>
                <button
                    className={`${theme}-btn add-btn`}
                    type='submit'
                    disabled={
                      !this.state.brewTimeMinutes ||
                      !this.state.name
                    }
                    >
                  Add Recipe +
                </button>
              </div>
            </div>
          </form>
          </div>
          )}
        </ThemeConsumer>
    )
  }
}
