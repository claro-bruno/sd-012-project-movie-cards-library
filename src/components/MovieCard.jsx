import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <h4 className="movie-card-title">
            { movie.title }
          </h4>
          <h5 className="movie-card-subtitle">
            { movie.subtitle }
          </h5>
          <p className="movie-card-storyline">
            { movie.storyline }
          </p>
          <div className="movie-card-rating">
            <Rating rating={ movie.rating } />
          </div>
        </section>
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
