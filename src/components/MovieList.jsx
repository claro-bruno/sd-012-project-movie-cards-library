import React, { Component } from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends Component {
  render() {
    return (
      <section>
        {data.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
