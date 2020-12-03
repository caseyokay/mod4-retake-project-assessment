import './App.css';
import React from 'react';
import MoviesList from './Containers/MoviesList';
import RentedMovies from './Containers/RentedMovies';


class App extends React.Component{
  state={
    api:[],
    rentedMovies: []
  }

  componentDidMount(){
    fetch('http://localhost:5000/movies')
    .then(response => response.json())
    .then(data => this.setState({api: data}));
  };

  clickHandler = (movieObj) => {
    console.log("Renting Movie In App", movieObj)
    this.setState({
      rentedMovies: [...this.state.rentedMovies], movieObj
    })
  }


  render(){
  return (
    <div className="App">
      <MoviesList movieArray={this.state.api} clickHandler={this.clickHandler}/>
      <RentedMovies rentedMoviesArray={this.state.rentedMovies}/>
    </div>
  );}
}

export default App;
