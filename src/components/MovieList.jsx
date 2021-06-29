import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((item) => <MovieCard movie={ item } />)
    );
  }
}
// Auxiliado pela dúvida do Josimar Souza no Slack
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })).isRequired,
};

export default MovieList;
