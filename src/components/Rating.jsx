// implement Rating component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-rating">
        <span className="rating">
          {rating}
        </span>
      </section>

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
