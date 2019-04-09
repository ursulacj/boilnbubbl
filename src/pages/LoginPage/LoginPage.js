import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';
import OverLayComponent from '../../components/FullLoginComponent/OverlayComponent/OverlayComponent';
import SignUpForm from '../../components/FullLoginComponent/SignUpForm/SignUpForm';
import LoginForm from '../../components/FullLoginComponent/LoginForm/LoginForm';

class LoginPage extends Component {

    state = {
        clicked: false,
        message: ''
    };

/*-----------------Event Handlers----------------*/ 

// event to change the login/signup form's animation 
handleSlideEffect = () => {    
    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true}); 
}

updateMessage = (msg) => {
    this.setState({message: msg});
    console.log(this.state.message);
}

handleSubmit = (e) => {
    e.preventDefault();
}

/*-----------------Render Function ----------------*/ 
    render() {

        // variable to hold the classes triggered by the login  form's animated  toggle
        const loginContainer =  this.state.clicked  ? 'fullLoginContainer right-panel-active' : 'fullLoginContainer'; 

        return(
            <div>
                <NavBar />

                <div className= {loginContainer}>

                    <SignUpForm 
                        updateMessage={this.updateMessage}
                    />
                    <LoginForm />
                    <OverLayComponent 
                        handleSlideEffect={this.handleSlideEffect}
                    />
                </div>
            </div>
        );
    }
};


export default LoginPage;