import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p>Rating</p>
        <p className="rating">{rating}</p>
      </div>
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
