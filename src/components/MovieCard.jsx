import React, { Component } from 'react';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <>
        <span>{movie.title}</span>
        <br />
      </>
    );
  }
}

export default MovieCard;
