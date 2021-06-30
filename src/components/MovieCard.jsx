// implement MovieCard component here
import React from 'react';
// import Rating from './Rating'
import PropTypes from 'prop-types';
class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="Imagem do filme." />
        <h4>
          {title}
        </h4>
        <h5>
          {subtitle}
        </h5>
        <p>
          {storyline}
        </p>
      </div>
    );
  }
}

export default MovieCard;
