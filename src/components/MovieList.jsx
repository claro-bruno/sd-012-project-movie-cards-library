import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={ movie.title } title={ movie.title } imagePath={ movie.imagePath } subtitle={ movie.subtitle } storyline={ movie.storyline } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  // movies: PropTypes.arrayOf(PropTypes.exact({
  title: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  storyline: PropTypes.string,
  subtitle: PropTypes.string,
}.isRequired;

export default MovieList;
