import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt="Capa do Filme" />
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </div>

    );
  }
}

export default MovieCard;
