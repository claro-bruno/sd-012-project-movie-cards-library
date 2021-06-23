import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movieInfo } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movieInfo;

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <title>{ title }</title>
        <p>{ subtitle }</p>
        <p>{ storyline }</p>
        <div>{ rating }</div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
