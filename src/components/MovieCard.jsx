// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, imagePath, subtitle, storyline, rating } } = this.props;
    return (
      <div className="movie-card-body">
        <div className="movie-card">
          <h4 className="movie-card-title">
            { title }
          </h4>
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <h5 className="movie-card-subtitle ">
            { subtitle }
          </h5>
          <p className="movie-card-storyline">
            { storyline }
          </p>
          <Rating rating={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }),
}.isRequired;

export default MovieCard;
