import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const lis = movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />);
    return (
      <ul className="movie-list">
        { lis }
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;// implement MovieList component here
