import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <p>{ movies.title }</p>
        <p>{ movies.subtitle }</p>
        <p>{ movies.storyline }</p>
        <img src={ movies.imagePath } alt={ movies.title } />
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
