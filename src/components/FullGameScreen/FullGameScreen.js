import React, {Component} from 'react';
import './FullGameScreen.css';
import IngredientRowContainer from './IngredientRowContainer/IngredientRowContainer';
import Cauldron from './Cauldron/Cauldron';

class FullGameScreen extends Component {
/*--------------STATE------------------------*/
/*--------------Event Handlers----------------*/
/*--------------Lifecycle Methods-------------*/
/*--------------Render Method-----------------*/
    render() {
        return (
            <div className="gameBoardWrapper">
                <IngredientRowContainer />
                <Cauldron 
                    baseComponent = {this.props.baseComponent}
                />
            </div>
        )
    }

}

export default FullGameScreen