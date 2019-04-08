import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        email: '',
        pw: '',
        clicked: false
    };

/*-----------------Event Handlers----------------*/ 

handleSlideEffect = () => {
    console.log('click event handled!');

    this.state.clicked ? this.setState({clicked: false}) : this.setState({clicked: true}); 
}

    render() {

        const loginContainer =  this.state.clicked  ? 'fullLoginContainer right-panel-active' : 'fullLoginContainer'; 

        return(
            <div>
                <NavBar />

                <div className= {loginContainer}>

                    <div className="form-container sign-up-container">
                        <form action="" className="loginForm">
                            <h1 className="h1">Create an Account</h1>
                            <input 
                                className="loginInput" 
                                type="text" 
                                placeholder="username" 
                                value={this.state.username}/>
                            <input 
                                className="loginInput" 
                                type="email" 
                                placeholder="email" 
                                value={this.state.email}/>
                            <input 
                                className="loginInput" 
                                type="password"
                                placeholder="password" 
                                value={this.state.password}/>
                            <button className="loginBtn">Sign Up</button>
                            
                        </form>
                    </div>   
                    <div className="form-container log-in-container">
                        <form action="" className="loginForm">
                            <h1 className="h1">Log In</h1>
                            <input 
                                className="loginInput" 
                                type="email" 
                                placeholder="email" 
                                value={this.state.email}/>
                            <input 
                                className="loginInput" 
                                type="password" 
                                placeholder="password" 
                                value={this.state.password}/>
                            <button className="loginBtn">Log In</button>
        
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1 className="h1">Welcome Back!</h1>
                                <p className="p">Rejoin the path of night and hone your magical skills</p>
                                <button 
                                    className="ghost loginBtn" 
                                    onClick={this.handleSlideEffect}>
                                        Log In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1 className="h1">Join the Path of Night</h1>
                                    <p className="p">Enter your personal details and start your magical journey</p>
                                <button 
                                    className="ghost loginBtn" 
                                    onClick={this.handleSlideEffect}>
                                        Sign Up</button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        )
    }



}


export default LoginPage;