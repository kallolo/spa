import React from 'react';
import Menu from './Menu.js';

class Header extends React.Component{
    //contoh siklus hidup react
    constructor(){
        super();
        console.log("Constructor Jalan");
        this.state ={
            testBugs : false
        }
    }
      
    //mount
    componentDidMount(){
        console.log("componentDidMount Jalan");
    }
    //update Componen
    shouldComponentUpdate(){ //jalan ketika ada update di komponen
        console.log("shouldComponentUpdate Jalan");
        return true; // maka komponen akan selalu di update
    }
    componentDidUpdate(){
        console.log("componentDidUpdate Jalan");
    }
    
    //handle onclik
    handleBugs = () => {
       
      this.setState = {
          testBugs : !this.state.testBugs
      }
      console.log(this.state.testBugs);
  }
    //error
    componentDidCatch(){
        console.log("error happen!");
    }

  
    render(){
        if (this.state.testBugs === true){
            throw new Error ("Crash");
        }
        console.log("render Jalan");

        return(
        <div>
            <h1>PodSpace</h1>
            {/* <button onClick={this.handleBugs}> Tes Bugs</button> */}
            <Menu/>
        </div>
        )
    }
}
export default Header;