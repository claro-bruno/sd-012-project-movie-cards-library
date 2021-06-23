import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
      const { movies } = this.props;
      return (
          <div className="movie-list">
              { movies.map(film => (
              <MovieCard key={ film.title } movie={ film } />
              )) }
          </div>
      );
  }
}

export default MovieList;

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  };
