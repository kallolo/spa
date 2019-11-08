import React, { Component } from 'react';
import axios from 'axios';

const axiosReq      = axios.create()
const AuthContext   = React.createContext()

//configurasi axios
// fungsinya untuk menyisipak header token untuk mengakses endpoin rest yang harus menggunakan token
axiosReq.interceptors.request.use((config) =>{
    const token = localStorage.getItem('token');
    config.headers.Authorization = token
    return config
});

export class AuthContextProvider extends Component{
    constructor(){
        super()
        this.state = {
            user       : [],
            token       : localStorage.getItem('token') || "",
            isLoggedIn  : (localStorage.getItem('token') === null) ? false : true
        }
    }

    //login
    login = (credentials) =>{
        return axiosReq.post("http://localhost:1111/login", credentials)
        .then(response =>{
            const { token } = response.data
            //simpan token di local storage
            localStorage.setItem('token',token)
            

            this.setState({
                token,
                isLoggedIn: true
            })

            return response.data
            // window.location.href = "/profile";
        })
    }

    //logout
    logout = () => {
        localStorage.removeItem('token')

        this.setState({
            isLoggedIn : false
        })
    }

    //ambil data user dari API (profile)
    profileUser = () => {
        return axiosReq.get("http://localhost:1111/users/profil")
        .then(response =>{
            console.log(response)
            this.setState({
                user: response.data.data
            });
            return response.data
        }).catch(err =>{
            console.log(err.response);
        })
    }

    render(){
        return(
            <AuthContext.Provider value={{
                login : this.login,
                logout : this.logout,
                profileUser : this.profileUser,
                ...this.state
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

//Higher Order Component
//Kegunaan HOC, Fungsi bisa digunakan berulang di berbagai komponen.
export const withAuth = (WrappedComponent) =>{
    return class extends Component{
        render(){
            return(
                <AuthContext.Consumer>
                 {(context) => (
                     <WrappedComponent {...this.props} {...context}/>
                 )}   
                </AuthContext.Consumer>
            )
        }
    }
}