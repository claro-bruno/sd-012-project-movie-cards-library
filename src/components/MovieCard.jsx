import React from 'react';
import PropTypes from 'prop-types';
import movies from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <h4>{movies.title}</h4>
        <img src={ movies.imagePath } alt={ movies.title } />
        <p> sdsd</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string,
  imagePath: PropTypes.string,
  rating: PropTypes.number,
}.isRequired;

export default MovieCard;
