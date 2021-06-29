// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;
    return (
      <div>
        <img src={ imagePath } alt="Imagem do filme." />
      </div>
    );
  }
}

export default MovieCard;
