import React, { Component } from 'react';
import './Cauldron.css'


class Cauldron extends Component {

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

/*--------------Render Function----------------*/

render() {
    return (
        <div className="cauldronWrapper">
            <div className="cauldronBody"></div>
            <div className="baseComponentText">{this.props.baseComponent}</div>
        </div>   
    )
}
}

export default Cauldron;