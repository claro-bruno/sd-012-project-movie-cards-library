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
        className="movie-list"
      />
    ));
  }
}

// prettier-ignore
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
