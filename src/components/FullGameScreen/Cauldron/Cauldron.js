import React, { Component } from 'react';
import './Cauldron.css'
import cauldron from './cauldron.png';


class Cauldron extends Component {

/*-------------------State-------------------*/
    state = {
        numStableNeeded: [],
        itemsInCauldron: []
    }

/*--------------Event Handlers----------------*/
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
        
        // // this data value comes from handleDrop's data var
        if (!stableFormula.includes(activeIngredients[data])) {
            alert('Better luck next time!');
        }  else {
            alert('ingredient accepted!');

            let itemsInCauldronCopy = this.state.itemsInCauldron;
            itemsInCauldronCopy.push(activeIngredients[data]);
            console.log(itemsInCauldronCopy);

            this.setState({itemsInCauldron: itemsInCauldronCopy})

            // push the item into itemsInCauldron array
            // remove item from activeIngredients array by using this.props.handleIngredientDrop()
        }

        
        // if itemsInCauldron.length === numStableNeeded, trigger win
        
    }
    
    // getNumNeeded = () => {
    //     const stableFormula = this.props.stableFormula;
    //     const activeIngredients = this.props.activeIngredients;

    //     const stableIngredients = activeIngredients.filter(val => stableFormula.includes(val));
    //     return stableIngredients;
    // }
/*--------------Lifecycle Methods----------------*/

    componentDidMount() {
        // this.setState({numStableNeeded: this.getNumNeeded()});
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