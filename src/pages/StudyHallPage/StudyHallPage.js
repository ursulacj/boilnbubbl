import React, { Component } from 'react';
import './StudyHallPage.css'
import GamePlayMenu from '../../components/GamePlayMenu/GamePlayMenu';
import FullGameScreen from '../../components/FullGameScreen/FullGameScreen';
import gameStateService  from '../../utilities/gameStateService';
import ingredientService from '../../utilities/ingredientService';



class StudyHallPage extends Component {
/*-----------------STATE-------------------------*/
    state = {
        ...this.getInitialState(),
        activeIngredients: [],
        stableFormula: [],
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

    //return the name of the base component so it can be passed down, rendered visually, and used to check the win/lose scenario
    getNewBaseComponent() {
        const randomBaseComponentIndex = () => Math.floor(Math.random() * Object.keys(ingredientService.baseComponent).length);
        const randomBaseComponentName = () => {
            const objIndex = randomBaseComponentIndex();
            return (Object.keys(ingredientService.baseComponent)[objIndex]); 
        }
        return randomBaseComponentName();

    }

    getActiveIngredient() {
        const stableFormula = ingredientService.baseComponent[this.state.baseComponent];
        const allIngredients = ingredientService.allIngredients;

        // this function is selecting random indices from testArr
        // this function would allow you to change the difficulty setting by lowering the number from 9 to 7, to 5 etc...
        let testTwo = new Array(9).fill().map(arrItem => Math.floor(Math.random() * stableFormula.length));
        // this function uses the random indices and maps them to values in testArr so that they can be checked against the allIngredients array
        const testFour = testTwo.map(arrItem => stableFormula[arrItem]);
        // this function returns a set object with all the unique values from testFour
        const testFive = [...new Set(testFour)];
        // this function gives the number of additional values you need to populate a new active ingredient array with 10 values 
        let numberNeeded = 10 - testFive.length;
        // this function gives all values in allIngredients that AREN'T in stableFormula
        const thirdArr = allIngredients.filter(val => !stableFormula.includes(val));
        // this function loops thru thirdArr and randomly selects the number of remaining values needed to create an active ingredients array with exactly 10 values 
        let secondArrIdxFunction = () => {
            let finalArr = [];
            for (let i=0; i < numberNeeded; i++) {
            let randomIdx = Math.floor(Math.random() * thirdArr.length);
            // TODO: add a section in here that says if the random number is already in finalArr DON'T add it, else, add it
            finalArr.push(randomIdx);
            }
            return finalArr;
        }
        // this assigns the result of secondArrIdxFunction to a var
        const secondArrIdxs = secondArrIdxFunction();
        // this changes the indices to array values
        const secondArrVals = secondArrIdxs.map(arrItem => thirdArr[arrItem]);
        // this concatenates testFive and secondArrVals to give the array of active ingredients 
        const activeIngredients = testFive.concat(secondArrVals);

        return activeIngredients;
    }

    mapActiveIngredient() {

    }

    getNewGuess() {

    }

/*--------------Event Handlers-------------------*/
    
    handleIngredientDrop = () => {

    }

    handleWinOrLoss = (e) => {
        
    }

    handleTimerUpdate = () => {
        this.setState((curState) => ({elapsedTime: ++curState.elapsedTime}));
    }

    handleGamePause = () => {
        this.state.isTiming ? this.setState({isTiming: false}) : this.setState({isTiming: true})
    }

    handleNewGameClick = (e) => {
        e.preventDefault();
        this.setState(this.getInitialState());

        const username = this.props.user.username;
        gameStateService.create(username);
        // this.props.history.push('/user/studyhall');
    }

    handleEndGameEarly = (e) => {
        e.preventDefault();
        console.log('game ending early');
        
        gameStateService.deleteGame();
        this.props.history.push('/user');
    }


    handleOpenNotes = () => {

    }
/*--------------Lifecycle Methods----------------*/
    componentDidMount() {
        console.log(this.props.user.username)
        console.log(ingredientService);
        console.log(ingredientService.baseComponent);
        console.log(ingredientService.allIngredients);

        // this is how I'll access the stable formula!!!!!!!
        console.log(ingredientService.baseComponent[this.state.baseComponent]);
        this.setState({activeIngredients: this.getActiveIngredient()});
        this.setState({stableFormula: ingredientService.baseComponent[this.state.baseComponent]});

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
                    handleGamePause =  {this.handleGamePause}
                    handleEndGameEarly =  {this.handleEndGameEarly}
                    handleOpenNotes = {this.handleOpenNotes}
                />
                <FullGameScreen 
                    baseComponent = {this.state.baseComponent}
                    activeIngredients={this.state.activeIngredients}
                />
                
            </div>
        )
}

}

export default StudyHallPage;