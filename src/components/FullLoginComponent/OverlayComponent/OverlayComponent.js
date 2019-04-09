import React from 'react';
import './OverlayComponent.css';

const OverlayComponent = (props) => (
    
    <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="h1">Welcome Back!</h1>
                        <p className="p">Rejoin the path of night and hone your magical skills</p>
                        <button 
                            className="ghost loginBtn" 
                            onClick={props.handleSlideEffect}>
                                Log In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="h1">Join the Path of Night</h1>
                            <p className="p">Enter your personal details and start your magical journey</p>
                        <button 
                            className="ghost loginBtn" 
                            onClick={props.handleSlideEffect}>
                                Sign Up</button>
                    </div>
                </div>
            </div>
)

export default OverlayComponent;