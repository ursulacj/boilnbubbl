import React, {Component} from 'react';
import './FullGameScreen.css';
import IngredientContainer from './IngredientContainer/IngredientContainer';
import Cauldron from './Cauldron/Cauldron';

class FullGameScreen extends Component {
/*--------------STATE------------------------*/
/*--------------Event Handlers----------------*/
/*--------------Lifecycle Methods-------------*/
/*--------------Render Method-----------------*/
    render() {
        return (
            <div className="gameBoardWrapper">
                <IngredientContainer 
                    activeIngredients={this.props.activeIngredients}
                />
                <Cauldron 
                    baseComponent = {this.props.baseComponent}
                />
            </div>
        )
    }

}

export default FullGameScreen