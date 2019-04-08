import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() =>
            <HomePage />
          } />


        </Switch>
      </div>
    );
  }
}

export default App;
