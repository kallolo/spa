import React, { Component } from 'react';
import { withAuth } from '../context/AuthContext';
import ButtonLogout from '../components/ButtonLogout.js';

class Profile extends Component{
    componentDidMount(){
        //mengambil data dari AuthContext
        this.props.profileUser()
    }

    render(){
        return(
            <div>
                <h3>Halaman Profile {this.props.user.username}</h3> 
                <ButtonLogout/>
            </div>
        )
    }
}
// const Profile = (props) => (
//     <div>
//         <h3>Halaman Profile {props.username}</h3>
//     </div>
// )

export default withAuth(Profile) 