// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <MovieCard Movies="props" />
      </div>
    );
  }
}

export default MovieList;
