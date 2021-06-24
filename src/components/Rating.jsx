import React from 'react';
import PropTypes from 'prop-types';
// implement Rating component here

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
