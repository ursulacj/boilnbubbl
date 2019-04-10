import React, { Component } from 'react';
import './SignUpForm.css';
import userService from '../../../utilities/userService';

class SignUpForm extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        passwordConf: ''
    };

/*------------------Event Handlers------------------*/

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            await userService.signup(this.state);
            // If successfully signed up, render user dash
            this.props.history.push('/');
        } catch (err) {
            // If invalid user data, render this
            this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.username && this.state.email && this.state.password === this.state.passwordConf);
    }

/*------------------Render Method------------------*/

    render() {
        return (
            <div className="form-container sign-up-container">
                <form 
                    onSubmit={this.handleSubmit}
                    className="loginForm">
                    <h1 className="h1">Create an Account</h1>
                    <input 
                        name="username"
                        className="loginInput" 
                        type="text" 
                        placeholder="username" 
                        onChange={this.handleChange}
                        value={this.state.username}/>
                    <input 
                        name="email"
                        className="loginInput" 
                        type="email" 
                        placeholder="email" 
                        onChange={this.handleChange}
                        value={this.state.email}/>
                    <input 
                        name="password"
                        className="loginInput" 
                        type="new-password"
                        placeholder="password" 
                        onChange={this.handleChange}
                        value={this.state.password}/>
                    <input 
                        name="passwordConf"
                        className="loginInput" 
                        type="new-password"
                        placeholder="confirm password" 
                        onChange={this.handleChange}
                        value={this.state.passwordConf}/>
                    <button 
                        className="loginBtn"
                        disabled={this.isFormInvalid()}>
                            Sign Up</button>
                </form>
            </div> 
        );
    }
};



export default SignUpForm;