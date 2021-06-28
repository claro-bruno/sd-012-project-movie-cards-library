import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => <MovieCard movies={ movie } key={ movie.title } />)
    );
  }
}

export default MovieList;
