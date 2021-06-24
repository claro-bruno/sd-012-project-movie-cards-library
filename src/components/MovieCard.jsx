import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <img src={ movie.imagePath } alt={ movie.title } />
        <p>{ movie.storyline }</p>
      </div>
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
