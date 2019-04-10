import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import userService from '../utilities/userService';
import './App.css';
import 'wired-elements';
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import UserDash from '../pages/UserDash/UserDash';
import StudyHallPage from '../pages/StudyHallPage/StudyHallPage';
import FaceOffPage from '../pages/FaceOffPage/FaceOffPage';
import NotesPage from '../pages/NotesPage/NotesPage';


class App extends Component {


/*--------------Event Handlers----------------*/

handleSignupOrLogin = () => {
  this.setState({ user: null });
}

/*--------------Lifecycle Methods----------------*/
async componentDidMount() {
  const user = userService.getUser();
}

/*--------------Render Function----------------*/

  render() {
    return (
      <div className="App">

        <Switch>
          <Route exact path='/' render={() =>
            <HomePage />
          } />

          <Route exact path='/signup' render={({ history }) =>
            <LoginPage 
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />

          <Route exact path='/user' render={() =>
            <UserDash />
          } />

          <Route exact path='/user/studyhall' render={() =>
            <StudyHallPage />
          } />

          <Route exact path='/user/faceoff' render={() =>
            <FaceOffPage />
          } />

          <Route exact path='/user/notes' render={() =>
            <NotesPage />
          } />

        </Switch>
      </div>
    );
  }
}

export default App;
