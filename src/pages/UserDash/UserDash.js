import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserDash.css'
import NavBar from '../../components/NavBar/NavBar';
import gameStateService from '../../utilities/gameStateService';


class UserDash extends Component {
/*---------------------STATE-------------------*/

/*--------------Event Handlers----------------*/

    handleNewGame = (e) => {
        const username = this.props.user.username;
        gameStateService.create(username);
        this.setState({ gameId: gameStateService.create(username) });
        this.props.history.push('/user/studyhall');
        
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

                        <div className="gamePlayMode">
                            
                                <form onSubmit={this.handleNewGame} className="playModeForm">
                                    <button type="submit" className="waves-effect waves-light playModeBtn playModeLink">Study Hall</button>
                                </form>
                
                                <form className="playModeForm">
                                    <Link to="#" className=""><button className="waves-effect waves-light playModeBtn playModeLink">Face Off</button></Link>
                                </form>
                        
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