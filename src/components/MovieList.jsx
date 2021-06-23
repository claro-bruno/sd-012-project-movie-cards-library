import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <h2>Movie List</h2>
        <MovieCard />
      </main>
    );
  }
}

export default MovieList;
