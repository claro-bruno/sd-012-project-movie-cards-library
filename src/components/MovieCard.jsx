import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     imagePath: PropTypes.string,
//     title: PropTypes.string,
//     subTitle: PropTypes.string,
//     rating: PropTypes.number,
//     storyLine: PropTypes.string,
//   })
// }

export default MovieCard;
