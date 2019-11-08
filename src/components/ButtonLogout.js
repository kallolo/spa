import React from 'react';
import { withAuth } from '../context/AuthContext';

const ButtonLogout = (props) =>(
    <nav>
        {

            props.isLoggedIn ? <button onClick={props.logout}> Logout </button>
            : <button onClick="#"> login </button>
        }
    </nav>
)

export default withAuth(ButtonLogout);