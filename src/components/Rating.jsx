import React, { Component } from 'react';
import propTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

Rating.propTypes = {
  rating: propTypes.number,
}.isRequired;

export default Rating;
