import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';
import OverLayComponent from '../../components/FullLoginComponent/OverlayComponent/OverlayComponent';
import SignUpForm from '../../components/FullLoginComponent/SignUpForm/SignUpForm';
import LoginForm from '../../components/FullLoginComponent/LoginForm/LoginForm';

class LoginPage extends Component {

    state = {
        clicked: false
    };

/*-----------------Event Handlers----------------*/ 

// event to change the login/signup form's animation based on the clicked prop in state 
handleSlideEffect = () => {    
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true}); 
}

/*-----------------Render Function ----------------*/ 
    render() {

        // variable to hold the classes triggered by the login  form's animated  toggle
        const loginContainer =  this.state.clicked  ? 'fullLoginContainer right-panel-active' : 'fullLoginContainer'; 

        return(
            <div>
                <NavBar 
                    user={this.props.user}
                />

                <div className= {loginContainer}>

                    <SignUpForm 
                        // HOW THE FUCK DO I PASS THE handleSignupOrLogin method as a prop???

                        // Or do I even need to????
                        {...this.props}
                    />
                    <LoginForm 
                        {...this.props}
                    />
                    <OverLayComponent 
                        handleSlideEffect={this.handleSlideEffect}
                    />
                </div>
            </div>
        );
    }
};


export default LoginPage;