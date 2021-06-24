import PropTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

// import PropTypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { title, subtitle, storyline, rating, imagePath } = movieInfo;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <section className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storeline">{ movie.storyline }</p>
        </section>
        <Rating rating={ movie.rating } />
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
