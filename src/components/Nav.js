import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'
import '../styles/nav.scss'

export default function Nav() { 
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className='nav flex row space-between'>
          <NavLink 
            to='/' 
            exact
            className='nav-link center-vert'>
            &laquo; Return Home
          </NavLink>
          
          <button
            style={{ fontSize: 30 }}
            className='btn-clear'
            onClick={ toggleTheme }
          >
            { theme === 'light' ? '🔦' : '💡' }
          </button>
        </nav>
      )}
    </ThemeConsumer>
  )
}