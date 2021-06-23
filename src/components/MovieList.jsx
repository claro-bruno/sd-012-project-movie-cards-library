// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {movies.map((filmeunico) => <MovieCard movie={ filmeunico } />)}
      </section>
    );
  }
}

export default MovieList;
