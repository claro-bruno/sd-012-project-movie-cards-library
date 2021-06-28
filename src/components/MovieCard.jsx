import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle } = movie;

    return (
      <article>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
      </article>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
