import React from 'react';
import MovieCard from '../Components/MovieCard';

class RentedMovies extends React.Component{

renderMovies = () => {
    let rentedMoviesArray = this.props.rentedMoviesArray;
    console.log(rentedMoviesArray);
    return rentedMoviesArray.map(element => <MovieCard key={element.id} movieObj={element}/>)
}

  render(){
    // console.log(this.props)
  return(
    <div className="rentedMoviesList"> 
    <h2>Rented Movies:</h2>
    {this.renderMovies()}
    </div>
  );
  }
}

export default RentedMovies;