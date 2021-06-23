import React, { Component } from 'react';
import PropType from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movieProps } = this.props;
    return (
      <section className="movie-card">
        <h4 className="movie-card-title">{movieProps.title}</h4>
        <img src={ movieProps.imagePath } alt="" />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieProps: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }),
};

MovieCard.defaultProps = {
  movieProps: 'Lista de filmes',
};

export default MovieCard;
