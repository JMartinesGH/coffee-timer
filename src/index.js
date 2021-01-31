import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home'
import Recipe from './components/Recipe'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends React.Component { 
  render() { 
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/recipe/add" component={Recipe} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
