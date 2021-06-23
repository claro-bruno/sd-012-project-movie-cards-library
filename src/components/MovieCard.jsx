import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <h1>{movie.title}</h1>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
// Tive dificuldades com proTypes então consultei o repositorio do Thalles Carneiro
// https://github.com/tryber/sd-012-project-movie-cards-library/pull/23/commits/319ca89a150ece4ab3b6550d4956b98f49e7d0c6
export default MovieCard;
