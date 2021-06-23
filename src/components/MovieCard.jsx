import React, { Component } from 'react';
import Rating from './Rating';
// import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div className="movie-card">
        <div>
          {movie.title}
        </div>
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,

//   })
// }

export default MovieCard;
