import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider } from './contexts/theme'
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import ActiveRecipe from './components/ActiveRecipe'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component { 
  state = {
      theme: 'light',
      toggleTheme: () => { 
        this.setState(({ theme }) => ({
          theme: theme === 'light'? 'dark' : 'light'
        }))
      }
    }
  render() { 
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={ `flex max-height flex-start column ${this.state.theme}` }>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipe/add" component={AddRecipe} />
              <Route path="/recipe/active" component={ActiveRecipe} />
            </Switch>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
