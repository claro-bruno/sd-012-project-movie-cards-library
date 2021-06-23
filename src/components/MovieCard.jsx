import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movieInfo;

    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">
            { title }
          </h4>
        </div>
      </div>
    );
  }
}

export default MovieCard;
