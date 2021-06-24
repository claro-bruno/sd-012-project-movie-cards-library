import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { list } = this.props;
    const movies = list;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
