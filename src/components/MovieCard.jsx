// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <img src={ movie.imagePath } alt={ movie.title } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    imagePath: PropType.string.isRequired,
  }).isRequired,
};

export default MovieCard;
