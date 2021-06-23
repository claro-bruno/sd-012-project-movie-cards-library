// implement MovieCard component here
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img
            className="movie-card-image"
            src={ movie.imagePath }
            alt={ movie.title }
          />
          <h4 className="movie-card-title">{movie.title}</h4>
          <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
          <p className="movie-card-storyline">{movie.storyline}</p>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }),
};

MovieCard.defaultProps = {
  movie: {
    imagePath: 'imagem',
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
  },
};

export default MovieCard;
