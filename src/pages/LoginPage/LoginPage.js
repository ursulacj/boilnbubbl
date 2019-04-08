import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LoginPage.css';

class LoginPage extends Component {

    state = {
        username: '',
        email: '',
        pw: ''
    };

    render() {
        return(
            <div>
                <NavBar />

                <div class="container" id="container">
                    <div class="form-container sign-up-container">
                        <form action="">
                            <h1>Create an Account</h1>
                            <input type="text" placeholder="username" value={this.state.username}/>
                            <input type="email" placeholder="email" value={this.state.email}/>
                            <input type="password" placeholder="password" value={this.state.password}/>
                            <button>Sign Up</button>
                            <button><Link to='/'>Cancel</Link></button>
                        </form>
                    </div>
                    <div class="form-container log-in-container">
                        <form action="">
                        <form action="">
                            <h1>Log In</h1>
                            <input type="email" placeholder="email" value={this.state.email}/>
                            <input type="password" placeholder="password" value={this.state.password}/>
                            <button>Log In</button>
                            <button><Link to='/'>Cancel</Link></button>
                        </form>
                        </form>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <button class="ghost" id="signIn">Log In</button>
                            </div>
                            <div class="overlay-panel overlay-right">
                                <h1>Join the Path of Night</h1>
                                    <p>Enter your personal details and start your magical journey</p>
                                <button class="ghost" id="signUp">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
        )
    }



}


export default LoginPage;