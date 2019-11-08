import React from 'react';
//statful componen : digunakan ketika kita membutuhakan constructur dan state
// class ListPodcast extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h2>{this.props.judul}</h2>
//                 <img src={this.props.gambar} alt="Gambar"/>
//             </div>
//         )
//     }
// }

//statles componen : digunakan ketika kita tidak membutuhakan constructur dan state dan sintaks menggunakan arrow function
const ListPodcast = (props) =>{
        return(
            <div>
                <h2>{props.judul}</h2>
                <img src={props.gambar} alt="Gambar" width="300px"/>
            </div>
        )
    }
export default ListPodcast;