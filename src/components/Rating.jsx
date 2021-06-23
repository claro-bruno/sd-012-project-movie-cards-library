// implement Rating component here
import React from 'react';

const Rating = (props) => {
  const { rating } = props;
  return (
    <p>
      <span>{ rating }</span>
    </p>
  );
};

export default Rating;
