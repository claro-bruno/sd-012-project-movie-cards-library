// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

const MovieCard = (props) => {
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <li>
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <img src={ imagePath } alt="Poster" />
      <Rating rating={ rating } />
    </li>
  );
};

export default MovieCard;
