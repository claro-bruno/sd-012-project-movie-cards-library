import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
      const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
        <div className="movie-card">
          <img className="movie-card-image" src={ imagePath } alt={ title }/>
          <h4 className="movie-card-title">{ title }</h4>

        </div>
    )
  }
}

export default MovieCard;