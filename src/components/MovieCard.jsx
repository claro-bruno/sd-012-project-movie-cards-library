// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <section>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{movie.storyline}</p>
        <h3>{movie.rating}</h3>
      </section>
    );
  }
}

MovieCard.propTypes = [{
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}];

export default MovieCard;
