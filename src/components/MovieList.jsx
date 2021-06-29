import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  // movies: PropTypes.arrayOf(PropTypes.exact({
  title: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  storyline: PropTypes.string,
  subtitle: PropTypes.string,
}.isRequired;

export default MovieList;
