import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    console.log(this.props);
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>
          { movie.title }
        </h4>
        <h5>
          {movie.subtitle}
        </h5>
        <p>
          {movie.storyline}
        </p>
      </section>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieCard;
