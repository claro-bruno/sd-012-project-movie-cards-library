import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </main>
    );
  }
}

export default MovieList;
