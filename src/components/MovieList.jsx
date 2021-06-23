// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <p>MovieList</p>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    );
  }
}
export default MovieList;
