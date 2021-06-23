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

Rating.propTypes = { rating: PropTypes.number.isRequired };

export default Rating;
