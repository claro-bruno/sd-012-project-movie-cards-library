import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <li><img src={ movie.imagePath } alt={ movie.title } /></li>
    );
  }
}

MovieCard.propTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}).isRequired;

export default MovieCard;
