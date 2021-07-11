import React, { Component } from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    const text = 'movie-card-image';

    return (
      <div>
        <img className={ text } src={ imagePath } alt="Movie Cover" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating className="movie-card-rating" rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: propTypes.shape({
    imagePath: propTypes.string,
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
  }).isRequired,
};

export default MovieCard;
