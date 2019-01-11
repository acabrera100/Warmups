import React from "react";
import {MovieDisplay} from "./movieDisplay.js";
import './styles.css';

class MovieIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  handleClick = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(response => {
        return response.json();
      })
      .then(res => {
        this.setState({ movies: res });
      });
  };

  render() {
    let movies = this.state.movies.map(movies => {
      return (
        <MovieDisplay title={movies.title} description={movies.description} />
      );
    });
    return (
      <>
        <button className ="myButton" onClick={this.handleClick}> Click for Movies </button>
        <>{movies}</>
      </>
    );
  }
}
export default MovieIndex;
