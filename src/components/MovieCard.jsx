import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt="Capa do Filme" className="movie-card-image" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    imagePath: Proptypes.string,
    storyline: Proptypes.string,
    rating: Proptypes.number,
  }).isRequired,
};

export default MovieCard;
