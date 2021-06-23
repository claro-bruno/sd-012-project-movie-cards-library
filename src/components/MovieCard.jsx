import React from 'react';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const [{ title, subtitle, storyline, imagePath }] = movies;

    return (
      <section>
        <img src={ imagePath } alt="" />
        <p>{ title }</p>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <Rating />
      </section>
    );
  }
}

export default MovieCard;
