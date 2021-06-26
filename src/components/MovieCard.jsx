// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
          <p className="movie-card-storyline">{ movie.storyline }</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}
// Validadores PropTypes para garanitir que o objeto tem chave e valor de tipos expecificos.
// ref= https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number,
  }),
};
// Default caso a Prop não receba o tipo experado.
MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
