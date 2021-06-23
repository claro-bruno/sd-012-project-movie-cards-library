import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie.id } movies={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
