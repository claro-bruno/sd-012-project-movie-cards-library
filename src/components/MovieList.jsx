// implement MovieList component here
import React from 'react';
import '../App.css';
import info from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      info.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)
    );
  }
}

export default MovieList;
