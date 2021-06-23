// implement Rating component here
import React from 'react';
import { number } from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: number,
};

Rating.defaultProps = {
  rating: 3,
};

export default Rating;
