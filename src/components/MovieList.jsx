import React from 'react';
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
