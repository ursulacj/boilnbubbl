import React, { Component } from 'react';
import './Cauldron.css'
import cauldron from './cauldron.png';


class Cauldron extends Component {

/*-------------------State-------------------*/
    state = {
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

            // push the item into itemsInCauldron array + update the state
            let itemsInCauldronCopy = this.state.itemsInCauldron;
            itemsInCauldronCopy.push(activeIngredients[data]);
            console.log(itemsInCauldronCopy);

            this.setState({itemsInCauldron: itemsInCauldronCopy});

            // if itemsInCauldron.length === numStableNeeded, trigger win
            let numStableNeeded = this.getNumNeeded();
            let itemsInCauldron = this.state.itemsInCauldron;
            console.log(itemsInCauldron.length);

            if (itemsInCauldron.length === numStableNeeded) {
                alert('congrats! you beat the odds! you mastered this challenge!')
            }

            // remove item from activeIngredients array by using this.props.handleIngredientDrop()
        }

        
        
        
    }
    
    getNumNeeded = () => {
        const stableFormula = this.props.stableFormula;
        const activeIngredients = this.props.activeIngredients;

        // basically this function can't run because the consts aren't passing the props.
        // BUT these consts are identical to the ones I'm using for the handleDrop function. In the handleDrop they're passed but NOT here 
        const stableIngredients = activeIngredients.filter(val => stableFormula.includes(val));
        return stableIngredients.length;
    }
/*--------------Lifecycle Methods----------------*/

    componentDidMount() {
        // console.log(this.getNumNeeded());
        console.log(this.props.stableFormula, 'stable did mount')
        console.log(this.props.activeIngredients, 'active did mount')
    }

    componentDidUpdate() {
        // to fix the prop passing issue I console.logged the function here and it worked 
        // BUT it won't allow me to set state here because it loops too much and exceeds the maximum depth. 
        // I think I need to pass this but ONLY once

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