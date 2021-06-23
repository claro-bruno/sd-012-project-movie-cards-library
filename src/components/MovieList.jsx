import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const list = movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />);
    return (
      <ul className="movie-list">
        { list }
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;// implement MovieList component here
