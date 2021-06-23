import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt="movie" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
