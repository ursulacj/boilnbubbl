import React, {Component} from 'react';
import './NavBar.css';
import logo from './CauldronIcon.png';
import AboutModal from './AboutModal/AboutModal';


class NavBar extends Component {
/*--------------STATE-------------------------*/

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/
componentDidMount() {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, {});

    const modal = document.querySelectorAll('.modal');
    window.M.Modal.init(modal, {});
}

/*--------------Render Function----------------*/
render() {
/*--------------Const and Functions------------*/
    let fullScreenNav = this.props.user ? 
        <>
            <ul className="left hide-on-med-and-down nav">
                
                <li><a href="#AboutModal" className="modal-trigger waves-effect waves-light">About</a></li>
                <li><a href="/user/notes">My Notes</a></li>
            </ul>
            <ul className="right hide-on-med-and-down nav">
                <li className="userWelcome"><a href="/user">Welcome, <span className="userName">{this.props.user.username}</span>!</a> </li>
                <li><a href="/" onClick={this.props.handleLogout}>Log Out</a></li>
            </ul>

            <AboutModal />
        </>
    :
        <>
            <ul className="left hide-on-med-and-down nav">
                <a href="#AboutModal" className="modal-trigger waves-effect waves-light">About</a>
            </ul>
            <ul className="right hide-on-med-and-down nav">
                <li><a href="/signup">Log In/ Sign Up</a></li>
            </ul>

            <AboutModal />
        </>

    let mobileScreenNav = this.props.user ?
        <>
                <li><a href="/" onClick={this.props.handleLogout}>Log Out</a></li>
                <li className="nav"><a className="nav" href="/user/notes">My Notes</a></li>
                <li><a href="#AboutModal" className="modal-trigger waves-effect waves-light">About</a></li>
                <AboutModal />
        </>
            :
        <>
                <li className="nav"><a className="nav" href="/signup">Log In/Sign Up</a></li>
                <li><a href="#AboutModal" className="modal-trigger waves-effect waves-light">About</a></li>
                <AboutModal />
                
        </>

    return (
        <div className="nav">
            <nav className="nav">
                <div className="nav-wrapper nav">
                    <a href="/" className="center brand-logo nav"><img src={logo} alt="Cauldron Logo" className="cauldronLogo center"/></a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger nav"><i className="material-icons nav">menu</i></a>
                    
                    {fullScreenNav}

                </div>
            </nav>
    
            <ul className="sidenav nav" id="mobile-demo">
                {mobileScreenNav}
            </ul> 
            
        </div>
        );
    }
}







export default NavBar;