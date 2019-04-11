import React, { Component } from 'react';
import './StudyHallPage.css'
import GamePlayMenu from '../../components/GamePlayMenu/GamePlayMenu';
import FullGameScreen from '../../components/FullGameScreen/FullGameScreen';



class StudyHallPage extends Component {

/*--------------Event Handlers----------------*/

/*--------------Lifecycle Methods----------------*/

/*--------------Render Function----------------*/

render() {
    return (
        <div>
            <GamePlayMenu />
            <FullGameScreen />
            
        </div>
    )
}

}

export default StudyHallPage;