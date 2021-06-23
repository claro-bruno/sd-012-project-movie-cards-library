// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { Movie } = this.props;
    return (
      <section className='movie-card'>
        <img className='movie-card-image' src={Movie.imagePath} alt={Movie.title} />
        <section className='movie-card-body'>
          <h2 className='movie-card-title'>{Movie.title}</h2>
          <h3 className='movie-card-subtitle'>{Movie.subtitle}</h3>
          <p className='movie-card-storyline'>{Movie.storyline}</p>
        </section>
        <section className='movie-card-rating'>
          <h4>Rating</h4>
          <p className='rating'>{Movie.rating}</p>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  Movies: PropTypes.object,
}

export default MovieCard;
