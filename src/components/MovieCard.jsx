// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </section>
        <section className="movie-card-rating">
          <p>Rating</p>
          <p className="rating">{ movie.rating }</p>
        </section>
      </section>
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
