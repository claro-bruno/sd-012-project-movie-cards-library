import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
        <h4 className="movie-card-title"> { movie.title } </h4>
      </div>
    );
  }
}
export default MovieCard;
