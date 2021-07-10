import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt={ movie.title } />
        <br />
        <h4>{ movie.title }</h4>
        <br />
        <h5>{ movie.subtitle }</h5>
        <br />
        <p>{ movie.storyline }</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
