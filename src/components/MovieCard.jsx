// implement MovieCard component here
import React from 'react';
import propTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { Movie: { title, subTitle, storyline, rating, imagePath } } = this.props;
    return (
      <li>
        <img src={ imagePath } alt="Imagem do Filme" className="movie-card-image" />
        <div>
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subTitle }</h5>
          <p className="movie-card-subtitle">{ storyline }</p>
        </div>
        <Rating rating={ rating } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  Movie: propTypes.shape({
    title: propTypes.string,
    subTitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,
};

export default MovieCard;
