import React, { Component } from 'react';
import './Cauldron.css'
import cauldron from './cauldron.png';


class Cauldron extends Component {

/*--------------Event Handlers----------------*/
    state = {

    }
/*--------------Lifecycle Methods----------------*/
    handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    handleDrop = (e) => {
        e.preventDefault();
        // var data = e.dataTransfer.getData("text/plain");
        // e.target.appendChild(document.getElementById(data));
    }
/*--------------Render Function----------------*/

render() {
    return (
        <div className="cauldronWrapper" onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
            <img src={cauldron} alt="cauldron" className="cauldronImg"/>
            <div className="baseComponentText">{this.props.baseComponent}</div>
        </div>   
    )
}
}

export default Cauldron;