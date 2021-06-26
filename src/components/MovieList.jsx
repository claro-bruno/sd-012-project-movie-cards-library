import React, { Component } from 'react';
import MovieCard from './MovieCard';

export class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />));
  }
}

export default MovieList;
