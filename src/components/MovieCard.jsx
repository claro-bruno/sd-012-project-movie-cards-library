// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section>
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />

      </section>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
