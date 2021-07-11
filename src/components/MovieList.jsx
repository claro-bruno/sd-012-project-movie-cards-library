import React, { Component } from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => (<MovieCard
          movie={ movie }
          key={ movie.title }
        />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
