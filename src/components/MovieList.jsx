// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Moviecard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        {movies.map((movie) => <Moviecard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
