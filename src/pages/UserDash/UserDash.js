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
                            <Link to="/user/studyhall" className="playModeLink playModeBtn"><div className="waves-effect waves-light ">Study Hall</div></Link>
                            <Link to="/user/studyhall" className="playModeLink playModeBtn"><div className="waves-effect waves-light ">Face Off</div></Link>
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