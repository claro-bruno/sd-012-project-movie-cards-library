// implement MovieCard component here
import React from 'react';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={ movies.imagePath } alt={ movies.title } />
        <p>{ movies.title }</p>
        <p>{ movies.subtitle }</p>
        <p>{ movies.storyline }</p>
        <p>{ movies.rating }</p>
      </div>
    );
  }
}

export default MovieCard;
