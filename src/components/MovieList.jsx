import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        { movies.map((elm) => <MovieCard key={ elm.title } movies={ elm } />) }
      </main>
    );
  }
}

export default MovieList;
