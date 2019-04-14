import React, {Component} from 'react';
import './GameTimer.css';

const formatTime = (seconds) => {
    let mins = Math.floor(seconds / 60).toString().padStart(2,'0');
    let secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
};

class GameTimer extends Component {

/*--------------Event Handlers----------------*/
    handleTick = () => {
        if (!this.props.isTiming) return;
        this.props.handleTimerUpdate();
    }
/*--------------Lifecycle Methods----------------*/
    componentDidMount() {
        this.timerId = setInterval(this.handleTick, 1000);
    }

    componentWillUnmount() {
        console.log('game timer unmounted');
        clearInterval(this.timerId);
    }

/*--------------Render Function----------------*/
    render() {
        return (
            <div className="gameTimer">
                <i className="material-icons gameTimerIcon">alarm</i>
                <div>{formatTime(this.props.elapsedTime)}</div>
            </div>
        );
    }

}


export default GameTimer;