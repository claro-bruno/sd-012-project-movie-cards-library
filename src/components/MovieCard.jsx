import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    const { movie: { imagePath, title, subtitle } } = this.props;
    return (
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ subtitle } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  }).isRequired,
};
