import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // movie = { title, subtitle, storyline, imagePath, rating }.
    return (
      <section>
        <div>
          <img src={ movie.imagePath } alt={ movie.title } />
          <h4>{ movie.title }</h4>
          <h5>{ movie.subtitle }</h5>
          <p>{ movie.storyline }</p>
        </div>
        <div>
          <Rating />
        </div>
      </section>
    );
  }
}

export default MovieCard;
