// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyLine, imagePath } = movies;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyLine}</p>
      </div>
    );
  }
}

export default MovieCard;
