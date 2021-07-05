import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">
          {rating}
        </p>
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
// Resolvi os erros de prop ao ver o exemplo dessa página:
// https://www.geeksforgeeks.org/reactjs-defaultprops/

export default Rating;
