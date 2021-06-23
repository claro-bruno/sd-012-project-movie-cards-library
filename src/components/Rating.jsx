// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const movieCardRating = 'movie-card-rating';
const rat = 'rating';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className={ movieCardRating }>
        <span className={ rat }>{ rating }</span>
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
