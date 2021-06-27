/* eslint-disable react/prop-types */
// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieCard } = this.props;
    return (
      <div>
        <h2>{movieCard.title}</h2>
        <h3>{movieCard.subtitle}</h3>
        <p>{movieCard.storyline}</p>
        <p>{movieCard.rating}</p>
        <img src={ movieCard.imagePath } alt={ movieCard.name } />
      </div>
    );
  }
}

export default MovieCard;
