import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;

    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <div>
          <h4>{ movie.title }</h4>
        </div>
      </div>
    );
  }
}

export default MovieCard;
