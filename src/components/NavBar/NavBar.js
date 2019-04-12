import React, {Component} from 'react';
import './NavBar.css';
import logo from './CauldronIcon.png';


class NavBar extends Component {
/*--------------STATE-------------------------*/

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/
componentDidMount() {
    var elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, {});
}

/*--------------Render Function----------------*/
render() {
/*--------------Const and Functions------------*/
    let fullScreenNav = this.props.user ? 
        <>
            <ul className="left hide-on-med-and-down nav">
                <li><a href="#">About</a></li>
                <li><a href="#">My Notes</a></li>
            </ul>
            <ul className="right hide-on-med-and-down nav">
                <li><a href="/" onClick={this.props.handleLogout}>Log Out</a></li>
            </ul>
        </>
    :
        <>
            <ul className="left hide-on-med-and-down nav">
                <li><a href="#">About</a></li>
            </ul>
            <ul className="right hide-on-med-and-down nav">
                <li><a href="/signup">Log In/ Sign Up</a></li>
            </ul>
        </>

    let mobileScreenNav = this.props.user ?
        <>
                <li className="nav"><a className="nav" href="#">Log Out</a></li>
                <li className="nav"><a className="nav" href="#">My Notes</a></li>
                <li className="nav"><a className="nav" href="#">About</a></li>
        </>
            :
        <>
                <li className="nav"><a className="nav" href="#">Log In/Sign Up</a></li>
                <li className="nav"><a className="nav" href="#">About</a></li>
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