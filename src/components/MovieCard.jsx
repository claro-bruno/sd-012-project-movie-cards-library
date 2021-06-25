// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie: { title, imagePath, subtitle, storyline } } = this.props;
    return (
      <div>
        <h4>
          { title }
        </h4>
        <img src={ imagePath } alt={ title } />
        <h5>
          { subtitle }
        </h5>
        <p>
          { storyline }
        </p>
      </div>
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
  }),
}.isRequired;

export default MovieCard;
