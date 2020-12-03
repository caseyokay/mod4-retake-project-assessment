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

  rentMovie = (movieObj) => {
    console.log("Renting Movie In App", movieObj)
    this.setState({
      rentedMovies: [...this.state.rentedMovies, movieObj]
    })
    console.log("Updated array:", this.state.rentedMovies)
  }

  returnMovie = (movieObj) => {
    console.log("Returning Movie", movieObj)
    let filteredArray = this.state.rentedMovies.filter(element => element !== movieObj)
    this.setState({
      rentedMovies: filteredArray
    })
  }


  render(){
  return (
    <div className="App">
      <MoviesList movieArray={this.state.api} clickHandler={this.rentMovie}/>
      <RentedMovies rentedMoviesArray={this.state.rentedMovies} clickHandler={this.returnMovie}/>
    </div>
  );}
}

export default App;
