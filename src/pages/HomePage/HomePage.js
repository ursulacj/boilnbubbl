import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './HomePage.css';

const HomePage = () => {

    return (
        <div>
            <NavBar />
            <div className= "homePageWrapper">
                <div className="cauldronGif">
                    {/* <h1 className="siteTitle"> Boil N' Bubbl </h1> */}
                </div>
                <div className="homeDescription">
                        Abezethibou abyzou aeshma agares anamalech archon azaz'el bathym buer choronzon demogorgon euryale caassimolar classyalabolas gremory gusion kokb'ael leviathan mammon melchiresa cerbere namtar (sumerian mythology orias oriax stolas xaphan.
                </div>
            </div>
        </div>

    );

};


export default HomePage;