import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <section className="movie-list">
        {
          movies.map((movie) => <MovieCard key={ movie.title } movieProps={ movie } />)
        }
      </section>
    );
  }
}

export default MovieList;
