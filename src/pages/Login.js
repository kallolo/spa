import React from 'react';
import { withAuth } from '../context/AuthContext';
import { Redirect } from 'react-router-dom';
import Header from '../components/Header.js';
import '../App.css';


class Login extends React.Component{
    constructor(){
        super();
        this.state ={
            username    : '',
            password    : '',

        }
    }
    
    handleChange = (e) =>{
        const { name, value } = e.target
        this.setState({
            [name]  : value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.login(this.state)
    }

    render(){
        // ngecek apakah sudah login
        if(this.props.isLoggedIn)
        return <Redirect push to='/profile' />

        return(
            <div className="wrapper">
                <Header/>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}
                    value={this.state.username}
                    type='text'
                    placeholder='Username'
                    name='username'/>
                    
                    <input onChange={this.handleChange}
                    value={this.state.password}
                    type='password'
                    placeholder='Password'
                    name='password'/>

                    <input type='submit' value='login'/>
                </form>
            </div>
        
        )
    }
}

export default withAuth(Login);