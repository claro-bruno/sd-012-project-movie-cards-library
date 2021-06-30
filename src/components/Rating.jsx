// implement Rating component here

import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{ rating }</p>
    );
  }
}

Rating.defaultProps = {
  rating: 8,
};

Rating.propTypes = {
  rating: PropTypes.number,
};// I already have done this one before: https://github.com/tryber/sd-011-project-movie-cards-library/pull/175

export default Rating;
