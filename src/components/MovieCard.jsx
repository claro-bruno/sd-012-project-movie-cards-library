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
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    imagePath: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
  }),
};

MovieCard.defaultProps = {
  movie: [
    {
      title: 'Kingsglaive',
      subtitle: 'Final Fantasy XV',
      storyline: 'King Regis, steal the sacred crystal.',
      rating: 4.5,
      imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    }],
};

export default MovieCard;
