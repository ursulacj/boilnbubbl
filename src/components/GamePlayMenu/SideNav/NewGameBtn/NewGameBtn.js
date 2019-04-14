import React from 'react';

const NewGameBtn = (props) => (
    <button className="newGameBtn" onClick={props.handleNewGameClick}>
        <i className="material-icons gameMenuBtn" alt="new game">replay</i>
    </button>
)

export default NewGameBtn;