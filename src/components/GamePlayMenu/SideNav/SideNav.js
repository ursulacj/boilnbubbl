import React from 'react';
import { Link } from 'react-router-dom';
import GameTimer from './GameTimer/GameTimer';
import PauseBtnModal from './PauseBtnModal/PauseBtnModal';
import EndBtnModal from './EndBtnModal/EndBtnModal';

const SideNav = (props) => (
    <div>
        
        <Link to="#" data-target="slide-out" className="sidenav-trigger right show-on-large fakeBtn"><i className="material-icons gameMenuBtn">menu</i></Link>
        
        <ul id="slide-out" className="sidenav">
            <li onClick={props.handleGamePause}><a href="#pauseModal" className="modal-trigger"><i className="material-icons">pause_circle_filled</i>Pause</a></li>
            <li><div className="divider"></div></li>
            <li onClick={props.handleGamePause}><a href="#endModal" className="modal-trigger"><i className="material-icons">stop</i>End</a></li>
            <li><div className="divider"></div></li>
            <li><Link to="#"><i className="material-icons" onClick={props.handleOpenNotes}>list_alt</i>Open Notes</Link></li>
            <li><div className="divider"></div></li>
            <GameTimer 
                handleTimerUpdate={props.handleTimerUpdate}
                handleGamePause={props.handleGamePause}
                elapsedTime={props.elapsedTime}
                isTiming={props.isTiming}
            />
        </ul>
            <PauseBtnModal 
                handleGamePause={props.handleGamePause}
                isTiming={props.isTiming} 
            />
            <EndBtnModal 
                handleGamePause={props.handleGamePause}
                isTiming={props.isTiming} 
                handleEndGameEarly={props.handleEndGameEarly}
            />
    </div>
)


export default SideNav;