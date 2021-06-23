// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((film) => <MovieCard key={ film.title } movie={ film } />) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
MovieList.defaultProps = {
  movies: [{}],
};

export default MovieList;
