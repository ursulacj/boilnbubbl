import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import 'wired-elements';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserDash from '../pages/UserDash/UserDash';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() =>
            <HomePage />
          } />

          <Route exact path='/login' render={() =>
            <LoginPage />
          } />

          <Route exact path='/user' render={() =>
            <UserDash />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;
