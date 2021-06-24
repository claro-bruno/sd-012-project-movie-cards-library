// implement Rating component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="movie-card-rating">
        <span className="rating">{rating}</span>
      </p>
    );
  }
}

// export default Rating;

// com ajuda do Nuwanda - T12
Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = { rating: PropTypes.number };
