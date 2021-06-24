import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline ">{ movie.storyline }</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ movie.rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};
// Tive dificuldades com proTypes então consultei o repositorio do Thalles Carneiro
// https://github.com/tryber/sd-012-project-movie-cards-library/pull/23/commits/319ca89a150ece4ab3b6550d4956b98f49e7d0c6
export default MovieCard;
