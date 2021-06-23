import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <section>
        {
          movies.map((movieCard) => <MovieCard key={ movieCard } />)
        }
      </section>
    );
  }
}

export default MovieList;
