import React, { Component } from 'react';
import './Cauldron.css'
import cauldron from './cauldron.png';


class Cauldron extends Component {

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

/*--------------Render Function----------------*/

render() {
    return (
        <div className="cauldronWrapper">
            <img src={cauldron} alt="cauldron" className="cauldronImg"/>
            <div className="baseComponentText">{this.props.baseComponent}</div>
        </div>   
    )
}
}

export default Cauldron;