import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import ListPodcast from './components/ListPodcast.js';
import AddButton from './components/AddButton.js';
import NewPodcast from './components/NewPodcast.js';
const isSearched = searchTerm => item => item.judul.toLowerCase().includes(searchTerm.toLowerCase());
class App extends Component{
  constructor(){
    super();
    this.state  = {
      podcast:[
        {
          id: 1,
          gambar : 'https://dwblog-ecdf.kxcdn.com/wp-content/uploads/2018/12/dewaweb-blog-apa-itu-podcast.png',
          judul : "Podcast Dewa Web"

        },
        {
          id: 2,
          gambar : 'https://i.ytimg.com/vi/uC2v8ywnlsc/hqdefault.jpg',
          judul : "Ceritanya Developer"

        },
        {
          id: 3,
          gambar : 'https://i1.sndcdn.com/avatars-000163212105-l5u06o-t500x500.jpg',
          judul : "Podcast Awal Minggu"

        },
    ],
    input :'',
    //stat untuk update tampilan 
    ui :{
      formVisibility : false // form tidak muncul dilayar
    }
  }
  // this.handelInput = this.handelInput.bind(this);
  }
  handleButton(){
    console.log("button diklik");
  }
  handelInput = (event) =>{
    console.log(event.target.value);
    //melakunakan perubahan di state
    this.setState({
      input: event.target.value
    })
  }
  handleNewPodcast = (newPodcast)=>{
    // console.log(newPodcast)
    //update dat ketika disubmit
    this.setState({
      podcast : [
        ...this.state.podcast,//ambil data lama
      newPodcast //data baru
    ]
    })
  }
  handleNewButton = () =>{
    this.setState({
      ui : {
        formVisibility : !this.state.ui.formVisibility //update sesuai kodisi jika kodisi awalnya true maka ketika di klik menjadi false dan sebalikanya
      }
    })
  }
  render(){
    return (
      <div className="wrapper" >
      <Header/>
      <NewPodcast propsNewPodacast = {this.handleNewPodcast} visible={this.state.ui.formVisibility}/>
      <div classNama="search-bar">
        <form>
          <input onChange={this.handelInput} type="text" placeholder="Cari Podcast Apa ?"/>
          <button onClick={this.handleButton} type="button">
            Cari
          </button>
        </form>
      </div>
      {/* {this.state.podcast.map(result =><div>{result.judul}</div>)} */}
      {this.state.podcast.filter(isSearched(this.state.input)).map(result =><ListPodcast judul={result.judul} gambar={result.gambar}/>)}
      <AddButton handleNewButton={this.handleNewButton}/>
      </div>
    
    )
  }
}

export default App;
