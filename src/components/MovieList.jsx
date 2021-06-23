// implement MovieList component here
import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    data.map((movie) => <MovieCard obj={movie} />);
  }
}

export default MovieList;
