import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import Nav from './Nav'
import '../styles/form.scss'

export default class ActiveRecipe extends React.Component { 
  state = {
  }
  componentDidMount(){ 
    
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
    return (
      <ThemeConsumer>
        {({theme})=>(
          <div className='flex-center column'>
            <Nav />
            <h1>Using Recipe</h1>
          </div>
          )}
        </ThemeConsumer>
    )
  }
}
