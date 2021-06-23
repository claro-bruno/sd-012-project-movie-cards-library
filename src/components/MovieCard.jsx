// implement MovieCard component here
import React from 'react';
import Rating from './Rating';

const MovieCard = (props) => {
  const { movie } = props;
  const { title, subtitle, storyline, imagePath, rating } = movie;
  return (
    <li>
      <h4>Title</h4>
      <h5>Subtitle</h5>
      <p>Storyline</p>
      <img src="" alt="" />
      <Rating rating={ rating } />
    </li>
  );
};

export default MovieCard;
