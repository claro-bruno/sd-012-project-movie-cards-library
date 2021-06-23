import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
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
        </section>
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
