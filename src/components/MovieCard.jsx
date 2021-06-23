import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt="foto do filme" />
        <h4 className="movie-card-title">{movie.title}</h4>
        <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
        <p className="movie-card-storyline">{movie.storyline}</p>
        <Rating className="movie-card-rating" rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
