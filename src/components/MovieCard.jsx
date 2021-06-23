import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h4>
          { movie.title }
        </h4>
        <h5>
          { movie.subtitle }
        </h5>
        <img
          src={ movie.imagePath }
          alt={ `${movie.title} ${movie.subtitle} - Imagem Demonstrativa` }
        />
        <p>
          { movie.storyline }
        </p>
      </section>
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
  }).isRequired,
};

export default MovieCard;
