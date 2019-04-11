import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './GamePlayMenu.css';
import '../GameTimer/GameTimer';
import InstructionModal from './InstructionModal/InstructionModal';
import SideNav from './SideNav/SideNav';


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
            <Link to="/user"><i className="material-icons gameMenuBtn">arrow_back</i></Link>

            <h1 className="center">Study Hall</h1>
            
            <InstructionModal />
            <SideNav />
                
        </div>
        )
    }
}

export default GamePlayMenu;