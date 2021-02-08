import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import Nav from './Nav'
import Timer from './Timer'
import queryString from 'query-string'
import '../styles/activeRecipe.scss'

export default class ActiveRecipe extends React.Component { 
  state = {
    vessel: null,
    minutes: null,
    seconds: null,
    coffeeWeight: null,
    waterWeight: null,
  }
  componentDidMount(){ 
     //set state by query string
    const { vessel, minutes, seconds, coffeeWeight, waterWeight } = queryString.parse(this.props.location.search)
    this.setState({
      vessel,
      minutes: parseInt(minutes),
      seconds: parseInt(seconds),
      coffeeWeight,
      waterWeight
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
   
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() { 
    const { vessel, minutes, seconds, coffeeWeight, waterWeight } = this.state 

    return (
      <ThemeConsumer>
        {()=>(
          <div className='flex-center column'>
            <Nav />
            <h1>Using Recipe</h1>
            <div className='flex-center row columns flex-auto max-height'>
              <div className='left column flex'>
                <h3>Coffee: { coffeeWeight } grams</h3>
                <h3>Water: { waterWeight } grams</h3>
              </div>
              <div className='center column flex-end'>
                <Timer minutes={minutes} seconds={seconds} />
              </div>
              <div className='right column flex-center'>
                <h3 className='rotate-ninety'>{ vessel ? vessel : 'vessel'}</h3>
              </div>
            </div>
          </div>
          )}
        </ThemeConsumer>
    )
  }
}

