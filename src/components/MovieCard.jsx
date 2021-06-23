import React from 'react';

class MovieCard extends React.Component {
  render() {

    const { movie } = this.props; 

    return (
      <div>
        <h2>{movie.title}</h2>
      </div>
    )
  }
}

export default MovieCard;