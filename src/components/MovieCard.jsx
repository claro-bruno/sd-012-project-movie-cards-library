// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    imagePath: PropTypes.string.isRequired,
  }),
};
MovieCard.defaultProps = {
  movie: {},
};

// MovieCard.propTypes = {
//   imagePath: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   subtitle: PropTypes.string.isRequired,
//   storyline: PropTypes.string.isRequired,
//   rating: PropTypes.number.isRequired,
// };

export default MovieCard;
