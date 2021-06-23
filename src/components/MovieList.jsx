// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// prettier-ignore
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => (
      <MovieCard
        key={ movie.title }
        title={ movie.title }
        subtitle={ movie.subtitle }
        storyline={ movie.storyline }
        rating={ movie.rating }
        imagePath={ movie.imagePath }
      />
    ));
  }
}

// prettier-ignore
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number,
      imagePath: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
