import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
      </div>
    );
  }
}

export default MovieCard;
