// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCard;
