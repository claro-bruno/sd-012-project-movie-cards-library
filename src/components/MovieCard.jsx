import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="Informações do filme" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <div className="movie-card-rating"><Rating rating={ movie.rating } /></div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
    imagePath: PropTypes.string.isRequired,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
