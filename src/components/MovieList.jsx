// implement MovieList component here
import React from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <ul className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.id } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired, // dica Jensen na monitoria
};

export default MovieList;
