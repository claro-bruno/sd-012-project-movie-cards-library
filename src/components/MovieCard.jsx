// implement MovieCard component here
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const movies = this.props;
    return (
      <div className="movie-card">
        <img
          className="movie-card-image"
          src={ movies.imagePath }
          alt={ movies.titleImg }
        />
        <p className="movie-card-title">{movies.title}</p>
        <p className="movie-card-subtitle">{movies.subtitle}</p>
        <p className="movie-card-storyline">{movies.storyline}</p>
        <span className="rating">{movies.rating}</span>
      </div>
    );
  }
}

MovieCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
  titleImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
