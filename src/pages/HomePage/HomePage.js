import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

const HomePage = (props) => {

    return (
        <div>
            <NavBar 
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <div className= "homePageWrapper">
                <div className="siteTitle">boil n' bubbl</div>
                <div className="gifDivWrapper"><div className="cauldronGif" /></div>
            </div>
        </div>

    );

};


export default HomePage;