import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GamePlayMenu.css';
import InstructionModal from './SideNav/InstructionModal/InstructionModal';
import SideNav from './SideNav/SideNav';
import NewGameBtn from './SideNav/NewGameBtn/NewGameBtn';


class GamePlayMenu extends Component {

/*--------------STATE----------------*/

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

componentDidMount() {
    const sideNav = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(sideNav, {
        edge: 'right'
    });
    const modal = document.querySelectorAll('.modal');
    window.M.Modal.init(modal, {});
}

/*--------------Render Function----------------*/

    render() {
        return (
        <div className="gamePlayMenu">
            <div><Link to="/user" className='fakeBtn'><i className="material-icons gameMenuBtn">arrow_back</i></Link></div>

            <div><h1 className="center">Study Hall</h1></div>
            
            <div className="gameNavMenuRight">
                <NewGameBtn 
                    handleNewGameClick={this.props.handleNewGameClick}/>
                <InstructionModal />
                <SideNav 
                    elapsedTime={this.props.elapsedTime}
                    isTiming={this.props.isTiming}
                    handleTimerUpdate = {this.props.handleTimerUpdate}
                    handleOpenNotes = {this.props.handleOpenNotes}
                    handleGamePause = {this.props.handleGamePause}
                />
            </div>
                
        </div>
        )
    }
}

export default GamePlayMenu;