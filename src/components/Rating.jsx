import React from 'react';
import movies from '../data';
// implement Rating component here

class Rating extends React.Component {
  render() {
    const [{ rating }] = movies;
    return (
      <p>{rating}</p>
    );
  }
}

export default Rating;
