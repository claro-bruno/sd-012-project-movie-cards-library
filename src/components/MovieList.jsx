import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([{
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }]).isRequired,
};

export default MovieList;
