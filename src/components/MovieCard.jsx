import React from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // const { } this.props
    return (
      <section>
        <img src={ movies.imagePath } alt={ movies.title } />
        <Rating />
      </section>
    );
  }
}

export default MovieCard;
