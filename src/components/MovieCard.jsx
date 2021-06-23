import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <section>
        <p> { movies.title } </p>
        <p> { movies.subtitle } </p>
        <p> { movies.storyline } </p>
        <img src={movies.imagePath} alt={movies.title} />
      </section>
    )
  };
}

MovieCard.protoTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    ImagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
