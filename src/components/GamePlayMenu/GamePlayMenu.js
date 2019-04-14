import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GamePlayMenu.css';
import InstructionModal from './InstructionModal/InstructionModal';
import SideNav from './SideNav/SideNav';
import NewGameBtn from './NewGameBtn/NewGameBtn';


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
            <Link to="/user" className='fakeBtn'><i className="material-icons gameMenuBtn">arrow_back</i></Link>

            <h1 className="center">Study Hall</h1>
            
            <NewGameBtn 
                handleNewGameClick={this.props.handleNewGameClick}/>
            <InstructionModal />
            <SideNav 
                handleTimerUpdate = {this.props.handleTimerUpdate}
                handleOpenNotes = {this.props.handleOpenNotes}
            />
                
        </div>
        )
    }
}

export default GamePlayMenu;