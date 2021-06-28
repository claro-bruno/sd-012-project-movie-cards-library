import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        { movies.map((movie) => <MovieCard movies={ movie } key={ movie.title } />) }
      </section>
    );
  }
}

export default MovieList;
