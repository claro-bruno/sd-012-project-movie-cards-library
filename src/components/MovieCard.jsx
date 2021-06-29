import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

// O código deste arquivo foi parcialmente baseado no código desenvolvido na aula 11.2
class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <h4>{movie.title}</h4>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={ movie.rating } />
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
