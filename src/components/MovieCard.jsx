import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    imagePath: Proptypes.string,
    storyline: Proptypes.string,
    rating: Proptypes.number,
  }).isRequired,
};

export default MovieCard;
