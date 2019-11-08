import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

class Hello extends React.Component{
    constructor(){
        super();
        this.state ={
            angka : 2,
            data : [
                {id:1, nama:"Mustajib"},
                {id:2, nama:"weregello"},
                {id:3, nama:"kallolo"}
            ]
        }
    }
    render(){
        return(
            <div>
            <Header/>
            <h1>Hello {this.props.username} {this.state.angka}</h1>
            <pre>
                {JSON.stringify(this.state.data)}
            </pre>
            <Footer/>
            </div>
        )
    }
}
export default Hello;