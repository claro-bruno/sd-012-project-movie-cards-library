// implement MovieList component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <ul>
        {
          movies.map((movie) => <MovieCard key={ movie.title } />)
        }
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
}.isRequired;

export default MovieList;
