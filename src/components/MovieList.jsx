import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

/**
 * Tive a ajuda do Bruno Augusto para resolver essa parte e revisar o código todo.
 */

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
