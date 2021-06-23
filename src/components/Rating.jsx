// implement Rating component here
import React from 'react';

function Rating(props) {
  const { rating } = props;
  return (
    <p className="rating">{rating}</p>
  );
}

export default Rating;
