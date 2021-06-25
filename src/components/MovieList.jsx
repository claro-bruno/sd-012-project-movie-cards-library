// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const movieList = movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
    return (
      <div>
        <p>{movieList}</p>
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
