// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt="" />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
