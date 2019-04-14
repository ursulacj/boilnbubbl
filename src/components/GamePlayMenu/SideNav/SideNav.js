import React from 'react';
import { Link } from 'react-router-dom';
import GameTimer from './GameTimer/GameTimer';

const SideNav = (props) => (
    <div>
        
        <Link to="#" data-target="slide-out" className="sidenav-trigger right show-on-large fakeBtn"><i className="material-icons gameMenuBtn">menu</i></Link>
        <ul id="slide-out" className="sidenav">
            <li><Link to="#"><i className="material-icons">pause_circle_filled</i>Pause</Link></li>
            <li><div className="divider"></div></li>
            <li><Link to="#"><i className="material-icons">stop</i>End</Link></li>
            <li><div className="divider"></div></li>
            <li><Link to="#"><i className="material-icons" onClick={props.handleOpenNotes}>list_alt</i>Open Notes</Link></li>
            <li><div className="divider"></div></li>
            <GameTimer 
                handleTimerUpdate={props.handleTimerUpdate}
                elapsedTime={props.elapsedTime}
                isTiming={props.isTiming}
            />
        </ul>

    </div>
)


export default SideNav;