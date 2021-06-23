// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { movies } = props;
  return (
    <ul>
      { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
