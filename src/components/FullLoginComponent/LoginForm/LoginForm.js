import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

/*------------------Event Handlers------------------*/
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

/*------------------Render Method------------------*/
    render() {
        return (
            <div className="form-container log-in-container">
                <form 
                    onSubmit={this.handleSubmit} 
                    className="loginForm">
                    <h1 className="h1">Log In</h1>
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
                        type="current-password" 
                        placeholder="password" 
                        onChange={this.handleChange}
                        value={this.state.password}/>
                    <button className="loginBtn">Log In</button>
                </form>
            </div>
        );
    }
};


export default LoginForm;