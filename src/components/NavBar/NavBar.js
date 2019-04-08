import React from 'react';
import './NavBar.css'

const NavBar = () => {

    return (
        <div className="nav">
            <nav className="nav">
                <div className="nav-wrapper nav">
                <a href="#!" className="brand-logo nav">boilnbubbl</a>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger nav"><i className="material-icons nav">menu</i></a>
                <ul className="right hide-on-med-and-down nav">
                    <li><a href="sass.html nav">About</a></li>
                    <li><a href="badges.html nav">Login/Sign Up</a></li>
                
                </ul>
                </div>
            </nav>

            <ul className="sidenav nav" id="mobile-demo">
                <li className="nav"><a className="nav" href="#">Login/Sign Up</a></li>
                <li className="nav"><a className="nav" href="#">About</a></li>
            </ul>        
        </div>
    );

};


export default NavBar;