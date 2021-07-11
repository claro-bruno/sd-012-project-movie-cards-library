import React, { Component } from 'react';
import propTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath } = movie;
    const text = 'movie-card-image';
    return (
      <div>
        <img className={ text } src={ imagePath } alt="Movie Cover" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
