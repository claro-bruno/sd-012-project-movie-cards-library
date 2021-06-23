import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class Movies extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>);
  }
}

Movies.propTypes = {
  movies: PropTypes.objectOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default Movies;
