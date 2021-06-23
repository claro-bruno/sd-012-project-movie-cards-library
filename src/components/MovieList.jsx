import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </section>
    );
  }
}
export default MovieList;
