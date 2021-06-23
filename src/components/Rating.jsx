import React, { Component } from 'react';
import Proptypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <div>
        <p className="rating">{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: Proptypes.number,
};

Rating.defaultProps = {
  rating: 3,
};

export default Rating;
