import React from 'react';

class MovieCard extends React.Component{

    state = {
        visible: false
    }

clickHandler = () => {
    console.log(this.state.visible)
    this.setState({
        visible: !this.state.visible
    });
}

localClickHandler = () => {
    let clickHandler = this.props.clickHandler
    clickHandler(this.props.movieObj)
}


  render(){
    //   const synopsis = this.props.movieObj.synopsis
  return (
    <div className="card">
        <h1>{this.props.movieObj.title}</h1>
        <button onClick={this.clickHandler}>
            Synopsis: {this.state.visible ? this.props.movieObj.synopsis: "🔎"}
        </button>
        <button onClick={this.localClickHandler}>🍿🎥</button>
    </div>
  );}
}

export default MovieCard;
