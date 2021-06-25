import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

export default MovieCard;
