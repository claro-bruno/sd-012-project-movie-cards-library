// implement MovieList component here
import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <section>
        {
          movies.map((item, index) => (
            <MovieCard movie={ item } key={ movies[index].title } />))
        }
      </section>);
  }
}

export default MovieList;
