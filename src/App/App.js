import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import userService from '../utilities/userService';
import './App.css';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserDash from '../pages/UserDash/UserDash';
import StudyHallPage from '../pages/StudyHallPage/StudyHallPage';
import FaceOffPage from '../pages/FaceOffPage/FaceOffPage';
import NotesPage from '../pages/NotesPage/NotesPage';


class App extends Component {
/*--------------STATE----------------*/

  state = {
    user: null,
  }

/*--------------Event Handlers----------------*/
// USER LOGOUT
handleLogout = () => {
  userService.logout();
  this.setState({ user: null });
}

// USER SIGNUP/LOGIN
handleSignupOrLogin = () => {
  this.setState({ user: userService.getUser()});
}

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
            <HomePage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />

          <Route exact path='/signup' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />

          <Route exact path='/user' render={({ history }) =>
            <UserDash
              history={history}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />

          <Route exact path='/user/studyhall' render={() =>
            <StudyHallPage />
          } />

          <Route exact path='/user/faceoff' render={() =>
            <FaceOffPage />
          } />

          <Route exact path='/user/notes' render={() =>
            <NotesPage
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;
