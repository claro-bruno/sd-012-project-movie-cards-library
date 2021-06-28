// implement MovieList component here
import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.array
};

export default MovieList;