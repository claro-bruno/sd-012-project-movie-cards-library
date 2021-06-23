import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <img src={ movie.imagePath } alt={ movie.title } />
        <Rating rating={ movie.rating || movie.ratingThree } />
      </li>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}).isRequired;

export default MovieCard;
