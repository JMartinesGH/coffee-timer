import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import AddRecipe from './components/AddRecipe'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component { 
  render() { 
    return (
      <Router>
        <div className={`dark`}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/recipe/add" component={AddRecipe} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
