import PropTypes from 'prop-types';
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { info } = this.props;
    return (
      <section className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ info.imagePath } alt={ info.title } />
          <h4 className="movie-card-header">{ info.title }</h4>
          <h5 className="movie-card-subtitle">{ info.subtitle }</h5>
          <p className="movie-card-storyline">{ info.storyline }</p>
        </section>
      </section>
    );
  }
}

MovieCard.propTypes = {
  info: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
