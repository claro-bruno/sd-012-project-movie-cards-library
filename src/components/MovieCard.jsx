import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

/**
 * Tive a ajuda do Bruno Augusto para revisar o código todo.
 */

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = [{
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}];

export default MovieCard;
