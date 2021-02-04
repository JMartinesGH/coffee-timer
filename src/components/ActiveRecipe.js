import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import Nav from './Nav'
import queryString from 'query-string'
// import { useStopwatch } from 'react-timer-hook';

import '../styles/form.scss'

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
      minutes,
      seconds,
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
    const { vessel, minutes: brewMinutes, seconds:brewSeconds, coffeeWeight, waterWeight } = this.state 
    // const { seconds, minutes, isRunning, start, pause, reset } = useStopwatch({ autoStart: false });

    return (
      <ThemeConsumer>
        {({theme})=>(
          <div className='flex-center column'>
            <Nav />
            <h1>Using Recipe</h1>
            <h3>Vessel: { vessel }</h3>
            <h3>{ brewMinutes ? 'Minutes: ' + brewMinutes : ''}</h3>
            <h3>{ brewSeconds ? 'Seconds: ' + brewSeconds : ''}</h3>
            <h3>{ coffeeWeight }</h3>
            <h3>{ waterWeight }</h3>
          </div>
          )}
        </ThemeConsumer>
    )
  }
}

