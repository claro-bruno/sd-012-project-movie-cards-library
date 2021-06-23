import React from "react";
import PropTypes from 'prop-types'
class MovieCard extends React.Component {
    render() {
      return MovieCard;
    }
  }
  MovieCard.propTypes = {
      movie: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        imagePath: PropTypes.string,
      }).isRequired
  };
export default MovieCard;
