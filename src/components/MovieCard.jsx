import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <img src={ movieInfo.imagePath } alt="movie" />
        <h4>{movieInfo.title}</h4>
        <h5>{movieInfo.subtitle}</h5>
        <p>{movieInfo.storyline}</p>
        <Rating rating={ movieInfo.rating } />
      </section>
    );
  }
}
MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
