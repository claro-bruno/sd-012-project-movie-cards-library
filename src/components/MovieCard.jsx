import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // const { movies } = this.props;
    return (
      <div>
        <section>
          <img src={ movie.imagePath } alt={ movie.title } />
          <h4>
            { movie.title }
          </h4>
          <h5>
            { movie.subtitle }
          </h5>
          <p>
            { movie.storyline }
          </p>
          <Rating rating={ movie.rating } />
          {/* { movies.map((movie) => <Rating key={ movie */}
          {/* .rating } movie={ movie.rating } />) } */}
        </section>
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
