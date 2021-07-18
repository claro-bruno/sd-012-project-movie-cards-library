import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={ movie.imagePath } alt="Imagem do filme" />
        <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
