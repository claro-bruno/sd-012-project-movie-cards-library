// implement MovieCard component here
import React, { Component } from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating }/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.object,
};

export default MovieCard;