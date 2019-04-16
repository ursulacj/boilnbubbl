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
        let data = e.dataTransfer.getData("text/plain");
        console.log(data)

        const stableFormula = this.props.stableFormula;
        const activeIngredients = this.props.activeIngredients;

        console.log(stableFormula)
        console.log(activeIngredients)

        // // this data value comes from handleDrop's data var
        if (!stableFormula.includes(activeIngredients[data])) {
            console.log('Better luck next time!');
        }  else {
            console.log('ingredient accepted');
        }
        
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