// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  const { rating } = props;
  return (
    <p className="movie-card-rating">
      <span className="rating">{ rating }</span>
    </p>
  );
};

// com ajuda do Nuwanda - T12
Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = { rating: PropTypes.number };

export default Rating;
