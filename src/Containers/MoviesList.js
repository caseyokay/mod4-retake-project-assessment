import React from 'react';
import MovieCard from '../Components/MovieCard';

class MoviesList extends React.Component{

renderMovies = () => {
    let movieArray = this.props.movieArray;
    console.log(movieArray);
    return movieArray.map(element => <MovieCard key={element.id} movieObj={element} clickHandler={this.props.clickHandler}/>)
}

  render(){
    // console.log(this.props)
  return(
    <div className="moviesList"> 
    {this.renderMovies()}
    </div>
  );
  }
}

export default MoviesList;
