import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserDash.css'
import NavBar from '../../components/NavBar/NavBar';


class UserDash extends Component {

    render() {
        return(
            <div>
                <NavBar />

                <div className="userDashWrapper">
                    <div className="playModeWrapper">
                        <h3>Select a Play Mode: </h3>

                        <div className="gamePlayMode">
                            <div className="waves-effect waves-light playModeBtn"><Link to="/user/studyhall" className="playModeLink">Study Hall</Link></div>
                            <div className="waves-effect waves-light  playModeBtn"><Link to="/user/faceoff" className="playModeLink">Face Off</Link></div>
                        </div>

                    </div>
                    <div className="scoreWrapper">
                        <div className="btn scorebtn scoreBoard">Score Board</div>
                    </div>
                </div>

            </div>
            
        )
    }



}


export default UserDash;