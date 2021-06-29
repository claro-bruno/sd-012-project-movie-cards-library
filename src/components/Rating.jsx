import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <h3 className="rating">{rating}</h3>
    );
  }
}

Rating.propTypes = {
  rating: PropType.number.isRequired,
};

export default Rating;
