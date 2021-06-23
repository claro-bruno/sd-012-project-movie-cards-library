import React, { Component } from 'react';
import Rating from './Rating';
// import PropTypes from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <div>
          MovieCard Info
        </div>
        <Rating score={ movie.rating } />
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
