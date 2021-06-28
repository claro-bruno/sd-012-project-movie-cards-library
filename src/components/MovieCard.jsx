import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, imagePath, rating, storyline, subtitle } = this.props;

    return (
      <section>
        <img src={ imagePath } alt={ `Imagem de ${title}` } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
  storyline: PropTypes.string,
  subtitle: PropTypes.string,
}.isRequired;

export default MovieCard;
