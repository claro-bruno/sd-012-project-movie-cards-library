import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieList = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <ul className="movie-list">
        { movieList }
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
