import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserDash.css'
import NavBar from '../../components/NavBar/NavBar';
import gameStateService from '../../utilities/gameStateService';


class UserDash extends Component {
/*---------------------STATE-------------------*/

/*--------------Event Handlers----------------*/

    handleSubmit = (e) => {
        e.preventDefault();
        gameStateService.create();
        
    }

/*--------------Render Method----------------*/
    render() {
        return(
            <div>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                />

                <div className="userDashWrapper">
                    <div className="playModeWrapper">
                        <h3>Select a Play Mode: </h3>


                        <form onSubmit={this.handleSubmit}>
                            <div className="gamePlayMode">
                                <button>
                                    <Link to="/user/studyhall" className="playModeLink playModeBtn waves-effect waves-light">Study Hall</Link>
                                </button>
                            </div>
                        </form>


                        <div className="gamePlayMode">
                            <Link to="#" className="playModeLink playModeBtn waves-effect waves-light">Face Off</Link>
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