// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return(
      <section>
        <img src={movie.imagePath} alt="Final Fantasy XV: KingsGlaive" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <Rating rating={movie.rating}/>
      </section>
    )
  }
}

MovieCard.propType = {
  movie: PropType.shape({
    title: PropType.string,
    subtile: PropType.string,
    storyLine: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string
  })
}

export default MovieCard;