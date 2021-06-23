/* eslint-disable react/destructuring-assignment */
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {
      title,
      subtitle,
      storyline,
      imagePath,
      rating,
    } = this.props.movie;

    return (
      <div>
        <p>{title}</p>
        <p>{subtitle}</p>
        <p>{storyline}</p>
        <p>{imagePath}</p>
        <p>{rating}</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
