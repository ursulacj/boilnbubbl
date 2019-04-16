import React, {Component} from 'react';
import './IngredientContainer.css';


class IngredientContainer extends Component {

/*-------------------State-------------------------*/
state = {
    dragStart: false,
}

/*-------------------Event Handlers-------------------------*/
handleDragStart = (e) => {
this.dragStart ? this.setState({dragStart: false}) : this.setState({dragStart: true});
}

/*-------------------Lifecycle Methods-----------------------*/
/*-------------------Render Method---------------------------*/
    render() {
/*-------------------Helper Vars--------------------------*/
    let hover = 'ingredientHolder';
    let dragged = this.state.dragStart ? 'held' : 'null';

/*-------------------Return Function----------------------*/
        return (
            <div className="ingredientRowWrap">
                {
                    this.props.activeIngredients.map((ingredient, idx) => (
                        <div className={`${hover} ${dragged}`} draggable="true" onDragStart={this.handleDragStart} key={idx}>
                            {ingredient}   
                        </div>
                    ))
                }
            </div>
        )
    }
}




export default IngredientContainer;