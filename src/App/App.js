import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import userService from '../utilities/userService';
import './App.css';
import 'wired-elements';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserDash from '../pages/UserDash/UserDash';


class App extends Component {


/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/
async componentDidMount() {
  const user = userService.getUser();
  this.setState({ user });
}

/*--------------Render Function----------------*/

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() =>
            <HomePage />
          } />

          <Route exact path='/login' render={({ history }) =>
            <LoginPage 
              history={history}
            />
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
