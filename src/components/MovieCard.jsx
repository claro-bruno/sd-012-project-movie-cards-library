/* eslint-disable react/prop-types */
// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieCard } = this.props;
    return (
      <div>
        <h2>{movieCard.title}</h2>
        <h3>{movieCard.subtitle}</h3>
        <p>{movieCard.storyline}</p>
        <p>{movieCard.rating}</p>
        <img src={ movieCard.imagePath } alt={ movieCard.title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  movieCard: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCard;
