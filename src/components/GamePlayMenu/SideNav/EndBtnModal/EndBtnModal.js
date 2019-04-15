import React from 'react';
import { Link } from 'react-router-dom';

const EndBtnModal = (props) =>(

    <>

        <div id="endModal" className="modal">
            <div className="modal-content">
                <h4 className="center">Are You Giving Up?</h4>
                <p>If you leave now, your game information will not be recorded. Any progress made will be lost. <br/> <br/> Are you sure you're ready to walk away?</p>
            </div>
            <div className="modal-footer modalBtnFooter">
                <Link to="#" className="modal-close waves-effect btn-flat" onClick={props.handleGamePause}>Resume Game</Link>
                <form onSubmit={props.handleEndGameEarly}>
                    <button type='submit' className="modal-close waves-effect btn-flat red white-text">End Game</button>
                </form>
            </div>
        </div>


    </>

)

export default EndBtnModal;