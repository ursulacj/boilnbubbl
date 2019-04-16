import React, {Component} from 'react';
import './IngredientContainer.css';
import potion from './Flask3.png'

class IngredientContainer extends Component {

/*-------------------State-------------------------*/
state = {
    dragStart: false,
}

/*-------------------Event Handlers-------------------------*/
handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
    console.log(e.target.id);
    let potionImg = new Image();
    potionImg.src = {potion};
    e.dataTransfer.setDragImage(potionImg, 5, 5);
    e.dataTransfer.dropEffect = 'copy';
}
handleDragEnd = () => {
    
}
/*-------------------Lifecycle Methods-----------------------*/
/*-------------------Render Method---------------------------*/
    render() {
/*-------------------Helper Vars--------------------------*/
    let hover = 'ingredientHolder';
    

/*-------------------Return Function----------------------*/
        return (
            <div className="ingredientRowWrap">
                {
                    this.props.activeIngredients.map((ingredient, idx) => (
                        <div className={`${hover}`} draggable="true" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} id={idx} key={idx}>
                            {ingredient}   
                        </div>
                    ))
                }
            </div>
        )
    }
}




export default IngredientContainer;