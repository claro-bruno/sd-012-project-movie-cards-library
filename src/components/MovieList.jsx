import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="list-container">
        <MovieCard movie={ movies[0] } />
      </section>
    );
  }
}

export default MovieList;
