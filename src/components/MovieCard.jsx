import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        { title }
        { subtitle }
        { storyline }
        { rating }
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.string }).isRequired,
};

export default MovieCard;
