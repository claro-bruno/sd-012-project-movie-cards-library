// implement MovieList component here
import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((elem, index) => <MovieCard key={ index } movie={ elem } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
