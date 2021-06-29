import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <h2>{movies.title}</h2>
        <h3>{movies.subtitle}</h3>
        <img src={ movies.imagePath } alt={ movies.title } />
        <p>{movies.storyline}</p>
        <h3>{movies.rating}</h3>
      </section>
    );
  }
}

MovieCard.propTypes = [{
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
}];

export default MovieCard;
