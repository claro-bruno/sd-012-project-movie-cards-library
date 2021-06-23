import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}

Rating.defaultProps = {
  rating: 3,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
