import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="cards">
        <img src={ movies.imagePath } alt={ `filme: ${movies.title}` } />
        <div>
          <h4>{movies.title}</h4>
          <h5>{movies.subtitle}</h5>
          <p>{movies.storyline}</p>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    // rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
