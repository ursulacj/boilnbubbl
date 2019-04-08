import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class UserDash extends Component {

    render() {
        return(
            <div>
                <NavBar />

                <h3>Select a Mode: </h3>
                <div className="waves-effect waves-light btn">Study Hall</div>
                <div className="waves-effect waves-light btn">Face Off</div>
                <div>ScoreBoard</div>
                <div>My Scores</div>

            </div>
            
        )
    }



}


export default UserDash;