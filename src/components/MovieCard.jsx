// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

const movieCard = 'movie-card movie-card-body';
const movieCardImage = 'movie-card-image';
const movieCardTitle = 'movie-card-title';
const movieCardSubtitle = 'movie-card-subtitle';
const movieCardStoryline = 'movie-card-storyline';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className={ movieCard }>
        <img src={ imagePath } alt="" className={ movieCardImage } />
        <h4 className={ movieCardTitle }>{ title }</h4>
        <h5 className={ movieCardSubtitle }>{ subtitle }</h5>
        <p className={ movieCardStoryline }>{ storyline }</p>
        <Rating rating={ rating } />
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
