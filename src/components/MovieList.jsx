import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movieList, index) => (
          <MovieCard movies={ movieList } key={ `Movie Title ${index + 1}` } />
        ))}
      </div>
    );
  }
}

export default MovieList;
