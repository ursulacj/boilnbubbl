import React, { Component } from 'react';
import './StudyHallPage.css'
import GamePlayMenu from '../../components/GamePlayMenu/GamePlayMenu';
import FullGameScreen from '../../components/FullGameScreen/FullGameScreen';
import ingredientService from '../../utilities/ingredientService';




class StudyHallPage extends Component {
/*-----------------STATE-------------------------*/
    state = {
        ...this.getInitialState(),
    }
/*--------------Game Logic--------------------*/
    getInitialState() {
        return {
            guesses: [this.getNewGuess()],
            activeIngredients: [],
            itemsInCauldron: [],
            baseComponent: this.getNewBaseComponent(),
            elapsedTime: 0,
            isTiming: true
        }
    }

    getActiveIngredient() {

    }

    //return the name of the base component so it can be passed down, rendered visually, and used to check the win/lose scenario
    getNewBaseComponent() {
        const randomBaseComponentIndex = () => Math.floor(Math.random() * Object.keys(ingredientService.baseComponent).length);
        const randomBaseComponentName = () => {
            const objIndex = randomBaseComponentIndex();
            return (Object.keys(ingredientService.baseComponent)[objIndex]); 
        }
        return randomBaseComponentName();

    }

    getNewGuess() {

    }
/*--------------Event Handlers-------------------*/
    handleTimerUpdate = () => {
        this.setState((curState) => ({elapsedTime: ++curState.elapsedTime}));
    }

    handleNewGameClick = () => {
        this.setState(this.getInitialState());
    }

    handleOpenNotes = () => {

    }
/*--------------Lifecycle Methods----------------*/
    componentDidMount() {
        console.log(ingredientService);
        console.log(ingredientService.baseComponent);
        console.log(ingredientService.allIngredients);
        // this is how I'll access the stable formula!!!!!!!
        console.log(ingredientService.baseComponent[this.state.baseComponent]);
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

/*--------------Render Function----------------*/
    render() {
        return (
            <div>
                <GamePlayMenu 
                    handleNewGameClick = {this.handleNewGameClick}
                    elapsedTime={this.state.elapsedTime}
                    isTiming={this.state.isTiming}
                    handleTimerUpdate = {this.handleTimerUpdate}
                    handleOpenNotes = {this.handleOpenNotes}
                />
                <FullGameScreen 
                    baseComponent = {this.state.baseComponent}
                />
                
            </div>
        )
}

}

export default StudyHallPage;