// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie: movies } = this.props;
    return (
      <section className='movie-card movie-card-body'>
        <img src={ movies.imagePath } alt={ movies.title } className='movie-card-image' />
        <h4 className='movie-card-title'>{movies.title}</h4>
        <h5 className='movie-card-subtitle'>{movies.subtitle}</h5>
        <p className='movie-card-storyline'>{movies.storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
