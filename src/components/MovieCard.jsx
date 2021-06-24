// implement MovieCard component here
import React, { Component } from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (
      <section className="movie-card movie-card-body">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    imagePath: PropType.string,
    storyline: PropType.string,
    rating: PropType.oneOfType([PropType.string, PropType.number]),
  }).isRequired,
};

export default MovieCard;
