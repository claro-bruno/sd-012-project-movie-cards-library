// implement Rating component here
import React, { Component } from 'react';
import PropType from 'prop-types';

class Rating extends Component {
  render() {
    const { rating } = this.props;

    return (
      <p>{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: PropType.number,
};

Rating.defaultProps = {
  rating: 4.5,
};

export default Rating;
