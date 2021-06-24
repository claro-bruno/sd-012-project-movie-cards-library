// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Data from '../data';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { imagePath, title, subtitle, storyline, rating } } = this.props;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ Data.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ title }</h4>
          <h5>{ subtitle }</h5>
          <p>{ storyline }</p>
          <div>
            <Rating rating={ rating } />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
