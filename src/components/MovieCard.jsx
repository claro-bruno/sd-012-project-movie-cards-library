import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

// O código deste arquivo foi parcialmente baseado no código desenvolvido na aula 11.2
class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <h4 className="movie-card-title">{movie.title}</h4>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <div className="movie-card-rating">
            <Rating rating={ movie.rating } />
          </div>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    imagePath: PropType.string.isRequired,
    rating: PropType.number.isRequired,
  }).isRequired,
};

export default MovieCard;
