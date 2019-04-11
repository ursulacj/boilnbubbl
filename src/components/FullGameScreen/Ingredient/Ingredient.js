import React, { Component } from 'react';
import './Ingredient.css';


class Ingredient extends Component {

/*-------------------State-------------------------*/
    state = {
        dragStart: false
    }

/*-------------------Event Handlers-------------------------*/
handleDragStart = (e) => {
    e.preventDefault();
    this.dragStart ? this.setState({dragStart: false}) : this.setState({dragStart: true});
}

handleDragOver = (e) => {
    e.preventDefault();
}

handleDrop = (e) => {
    e.preventDefault();
}

/*-------------------Lifecycle Methods-------------------------*/

// const invisible 

// const hover 

/*-------------------Render Method-------------------------*/

render() {
    
    /*-------------------Helper Variables-------------------------*/
    const dragged = this.state.dragStart ? 'ingredient hovered' : 'ingredient';

    return (
        <div className={dragged} draggable="true" onDragStart={this.handleDragStart} onDragOver={this.handleDragOver} onDrop={this.handleDrop}></div>
    )
}

}

export default Ingredient;
