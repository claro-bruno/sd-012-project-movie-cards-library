// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt="" />
        <main className="movie-card-body">
          <h2 className="movie-card-title">{movie.title}</h2>
          <p className="movie-card-subtitle">{movie.subtitle}</p>
          <p className="movie-card-storyline">{movie.storyline}</p>
          <div className="movie-card-rating">
            <p>Rating</p>
            <p className="rating">{movie.rating}</p>
          </div>
        </main>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
