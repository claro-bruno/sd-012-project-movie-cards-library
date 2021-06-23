import PropTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section className='movie-card'>
        <section className='movie-card-body'>
          <h4 className='movie-card-header'>{ movieInfo.title }</h4>
          <h5 className='movie-card-subtitle'>{ movieInfo.subtitle }</h5>
          <p className='movie-card-storyline'>{ movieInfo.storyline }</p>
          <img className='movie-card-image' src={ movieInfo.imagePath } alt={ movieInfo.title } />
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
