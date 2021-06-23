import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-card">
        <img src={ movies.imagePath } alt="foto do filme" />
        <h4>{movies.title}</h4>
        <h5>{movies.subtitle}</h5>
        <p>{movies.storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.exact({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
