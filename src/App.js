import './App.css';
import React from 'react';
import MoviesList from './Containers/MoviesList';
import RentedMovies from './Containers/RentedMovies';
import SearchForm from './Components/SearchForm';
import AddMovieForm from './Components/AddMovieForm';


class App extends React.Component{
  state={
    api:[],
    rentedMovies: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch('http://localhost:5000/movies')
    .then(response => response.json())
    .then(data => this.setState({api: data}));
  };

  rentMovie = (movieObj) => {
    // console.log("Renting Movie In App", movieObj)
    let rentedMovies = this.state.rentedMovies
    const capacity = rentedMovies.length > 2
    if (!capacity) this.setState({
      rentedMovies: [...this.state.rentedMovies, movieObj]
    })
    // console.log("Updated array:", this.state.rentedMovies)
  }

  returnMovie = (movieObj) => {
    // console.log("Returning Movie", movieObj)
    let filteredArray = this.state.rentedMovies.filter(element => element !== movieObj)
    this.setState({
      rentedMovies: filteredArray
    })
  }

  //now create a searchchangehandler that can lift user input
  searchChangeHandler=(e)=>{
    console.log(e.target.value)
    this.setState({searchValue: e.target.value});
  }

  submitHandler=(movieObj)=>{
    console.log("In App", movieObj);
    fetch('http://localhost:5000/movies', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movieObj),
    })
    .then(response => response.json())
    .then(newMovie => this.setState({api: [...this.state.api],  newMovie}));
    // .then(data => {
    //   console.log('Success:', data);
}


  render(){
  return (
    <div className="App">
      <SearchForm searchValue={this.state.searchValue} changeHandler={this.searchChangeHandler}/>
      <MoviesList movieArray={this.state.api} clickHandler={this.rentMovie} searchValue={this.state.searchValue}/>
      <AddMovieForm submitHandler={this.submitHandler}/>
      <RentedMovies rentedMoviesArray={this.state.rentedMovies} clickHandler={this.returnMovie}/>
    </div>
  );}
}

export default App;
