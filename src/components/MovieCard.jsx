import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section className="movie-list">
        <div className="movie-card">
          <img className="movie-card-image" src={ imagePath } alt="" />
          <div className="movie-card-body">
            <h4 className="movie-card-title">{ title }</h4>
            <h5 className="movie-card-subtitle">{ subtitle }</h5>
            <p className="movie-card-storyline">{ storyline }</p>
          </div>
          <div className="movie-card-rating">
            <Rating rating={ rating } />
          </div>
        </div>
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
