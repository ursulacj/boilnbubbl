import React, { Component } from 'react';
import './Cauldron.css'


class Cauldron extends Component {

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

/*--------------Render Function----------------*/

render() {
    return (
        <div>
            <div className="cauldron"></div>
            <div>{this.props.baseComponent}</div>
        </div>   
    )
}
}

export default Cauldron;