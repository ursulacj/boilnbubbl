import React, { Component } from 'react';
import './Ingredient.css';


class Ingredient extends Component {

/*-------------------State-------------------------*/
    state = {
        dragStart: false,
        dragEnter: false,
        dragLeave: false
    }

/*-------------------Event Handlers-------------------------*/
handleDragStart = (e) => {
    this.dragStart ? this.setState({dragStart: false}) : this.setState({dragStart: true});
}

handleDragOver = (e) => {
    e.preventDefault();
}

handleDragEnter = (e) => {
    e.preventDefault();
    this.dragEnter ? this.setState({dragEnter: false}) : this.setState({dragEnter: true});
}

handleDragLeave = (e) => {
    this.dragLeave ? this.setState({dragLeave: false}) : this.setState({dragLeave: true});
}


/*-------------------Lifecycle Methods-------------------------*/
/*-------------------Render Method-------------------------*/

render() {
    let hover = 'ingredientHolder';
    if (this.state.dragEnter) {hover += ' hovered'};
    
    /*-------------------Helper Variables-------------------------*/
    let dragged = this.state.dragStart ? 'ingredient held' : 'ingredient';


    return (
        <div className={hover} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave}>
            <div className={dragged} draggable="true" onDragStart={this.handleDragStart}></div>
        </div>
    )
}

}

export default Ingredient;
