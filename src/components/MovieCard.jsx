import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h2>{ movies.title }</h2>
        <h3>{ movies.subtitle }</h3>
        <p>{ movies.storyline }</p>
        <div>
          { movies.rating }
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
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
