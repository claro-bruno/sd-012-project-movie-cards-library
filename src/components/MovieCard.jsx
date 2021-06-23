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
          <h2 className="movie-card-title">{ movie.title }</h2>
          <h3 className="movie-card-subtitle">{ movie.subtitle }</h3>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </section>
        <section className="movie-card-rating">
          <h4>Rating</h4>
          <p className="rating">{ movie.rating }</p>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
