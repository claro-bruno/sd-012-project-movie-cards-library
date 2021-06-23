// implement MovieList component here
import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

// prettier-ignore
class MovieList extends React.Component {
  render() {
    return data.map((movie) => <MovieCard key={ movie.title } obj={ movie } />);
  }
}

export default MovieList;
