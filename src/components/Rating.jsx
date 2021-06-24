import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <h5 className="rating">{rating}</h5>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
