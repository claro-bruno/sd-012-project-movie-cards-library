import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}
Rating.defaultProps = {
  rating: 'undefined',
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
