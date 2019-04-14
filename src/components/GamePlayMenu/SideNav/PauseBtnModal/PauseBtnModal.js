import React from 'react';
import { Link } from 'react-router-dom';
import './PauseBtnModal.css';

const PauseBtnModal = (props) =>(

    <>

        <div id="pauseModal" className="modal pauseModal">
            <div className="modal-content">
                <h4 className="center">Game Paused</h4>
            </div>
            <div className="modal-footer modalBtnFooter">
                <Link to="#" className="modal-close waves-effect btn-flat" onClick={props.handleGamePause}>Resume Game</Link>
                <Link to="#" className="modal-close waves-effect btn-flat red white-text">End Game</Link>
            </div>
        </div>


    </>

)

export default PauseBtnModal;