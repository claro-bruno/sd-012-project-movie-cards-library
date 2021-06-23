// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

const movieCard = 'movie-card movie-card-body';
const movieCardImage = 'movie-card-image';
const movieCardTitle = 'movie-card-title';
const movieCardSubtitle = 'movie-card-subtitle';
const movieCardStoryline = 'movie-card-storyline';
const movieCardRating = 'movie-card-rating';
const rat = 'rating';

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
        <div className={ movieCardRating }>
          <span className={ rat }>{rating}</span>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
