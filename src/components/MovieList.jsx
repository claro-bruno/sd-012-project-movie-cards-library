import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-import PropTypes from 'prop-types';list">
        {movies.map((mv) => (
          <MovieCard movie={ mv } key={ mv.title } />
        ))}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf({
  }).isRequired,
};
export default MovieList;
