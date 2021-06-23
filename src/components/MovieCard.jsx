// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// prettier-ignore
class MovieCard extends React.Component {
  render() {
    const { obj } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = obj;
    return (
      <article>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating value={ rating } />
      </article>
    );
  }
}

MovieCard.propTypes = {
  obj: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
