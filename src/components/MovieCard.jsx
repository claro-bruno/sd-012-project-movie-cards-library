// implement MovieCard component here
import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <rating>{movie.rating}</rating>
        <img src={ movie.imagePath } alt={ movie.title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  // eslint-disable-next-line react/require-default-props
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }).isRequired,
};

export default MovieCard;
