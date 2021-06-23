import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={ movie.imagePath} alt={  movie.title }></img>
        <h4>{  movie.title }</h4>
        <h5>{ movie.subtitle}</h5>
        <p>{  movie.storyline }</p>
        <Rating />
      </div>   
    );
  }
}

export default MovieCard;