import React from 'react';
import { Link } from 'react-router-dom';
import GameTimer from '../GameTimer/GameTimer';

const SideNav = () => (
    <div>
        
        <Link to="#" data-target="slide-out" className="sidenav-trigger right show-on-large"><i className="material-icons gameMenuBtn">menu</i></Link>
        <ul id="slide-out" className="sidenav">
            <li><Link to="#">Pause</Link></li>
            <li><div className="divider"></div></li>
            <li><Link to="#">End</Link></li>
            <li><div className="divider"></div></li>
            <li><Link to="#">My Notes</Link></li>
            <li><div className="divider"></div></li>
            <GameTimer />
        </ul>

    </div>
)


export default SideNav;