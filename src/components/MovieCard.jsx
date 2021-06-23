import React from 'react';
import Rating from './Rating';

function MovieCard(props) {
  const { movie } = props;
  return (
    <div>
      <img src={ movie.imagePath } alt={ movie.title } />
      <h4>{movie.title}</h4>
      <h5>{movie.subtitle}</h5>
      <p>{movie.storyline}</p>
      <Rating rating={ movie.rating } />
    </div>
  );
}

export default MovieCard;
