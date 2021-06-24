import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;

    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={ movieInfo.imagePath } alt="" />
          <h4 className="movie-card-title">{ movieInfo.title }</h4>
          <h5 className="movie-card-subtitle">{ movieInfo.subtitle }</h5>
          <p className="movie-card-storyline">{ movieInfo.storyline }</p>
          <Rating rating={ movieInfo.rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
