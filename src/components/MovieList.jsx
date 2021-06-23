import React from 'react';
import Movie from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list"><MovieCard /></section>
    );
  }
}

export default MovieList;
