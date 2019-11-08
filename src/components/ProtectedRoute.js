import React from 'react';
import {Route , Redirect} from 'react-router-dom';
import { withAuth } from '../context/AuthContext';

const ProtectedRoute = (props) => {
   
    const { component : Component, ...rest } = props  // mengambil data-data dari props
    
    return(
        props.isLoggedIn ? <Route {...rest} component={Component} /> //jika isLoggedIn = true
                        : <Redirect push to='/login'/> //jika isLoggedIn = false
    )
}

export default withAuth(ProtectedRoute)