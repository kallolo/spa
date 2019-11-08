import React from 'react';

class NewPodcast extends React.Component{
    constructor(){
        super();
        this.state ={
            judul : '',
            gambar :''
        }
    }
    handleJudul = (event) =>{
        this.setState({
            judul: event.target.value
        })
    }
    handleGambar = (event) =>{
        this.setState({
            gambar: event.target.value
        })
    }
    handleForm = (event) => {
        event.preventDefault(); //fungsi ketika submit tidak refrash halaman
        const newPodcast ={
            judul : this.state.judul,
            gambar : this.state.gambar
        }
        this.setState({
            judul : '',
            gambar : ''
        });
        // console.log(newPodcast);
      
      this.props.propsNewPodacast(newPodcast)
    }

    render(){
        return(
            // jika vissiblenya true maka form muncul!
            <div style={this.props.visible ? {display:'block'} : {display : 'none'}}> 
                <h3>New Podcast</h3>
                <form onSubmit={this.handleForm} >
                    <input onChange={this.handleJudul} type="text" placeholder="judul" value={this.state.judul}/>
                    <input onChange={this.handleGambar} type="text" placeholder="url gambar" value={this.state.gambar}/>
                    <button type="submit">Simpan</button>
                </form>
            </div>
        )
    }
}

export default NewPodcast;