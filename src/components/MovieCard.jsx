import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

export default class MovieCard extends Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;
    return (
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <img src={ imagePath } alt={ subtitle } />
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};
