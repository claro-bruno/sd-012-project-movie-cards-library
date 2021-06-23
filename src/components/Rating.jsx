import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <aside className="movie-card-rating">
        <p className="rating-text">Rating</p>
        <p className="rating">{rating}</p>
      </aside>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 2.5,
};

export default Rating;
