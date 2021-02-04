import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import Nav from './Nav'
import queryString from 'query-string'

import '../styles/form.scss'

export default class ActiveRecipe extends React.Component { 
  state = {
    vessel: null,
    brewTime: null,
    coffeeWeight: null,
    waterWeight: null,
  }
  componentDidMount(){ 
     //set state by query string
    const { vessel, minutes, seconds, coffeeWeight, waterWeight } = queryString.parse(this.props.location.search)
    this.setState({
      vessel,
      minutes,
      seconds : seconds || 0,
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
        {({theme})=>(
          <div className='flex-center column'>
            <Nav />
            <h1>Using Recipe</h1>
            <h3>Vessel: { vessel }</h3>
            <h3>{minutes ? 'Minutes: ' + minutes : ''}</h3>
            <h3>{ seconds ? 'Seconds: '+ seconds : ''}</h3>
            <h3>{ coffeeWeight }</h3>
            <h3>{ waterWeight }</h3>
          </div>
          )}
        </ThemeConsumer>
    )
  }
}

