import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const {title, subtitle, storyline, imagePath , rating} = this.props.movie;
    return (
    <div>
      <img src={ imagePath } alt={ `imagem do filme ${title}` } />
      <h4>{ title }</h4>
      <h5>{ subtitle }</h5>
      <p>{ storyline }</p>
      <Rating rating={ rating } />
    </div>
    );
  }
}

export default MovieCard;
