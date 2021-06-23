import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p>
        <p>{ movie.imagePath }</p>
        <p>{ movie.rating }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
