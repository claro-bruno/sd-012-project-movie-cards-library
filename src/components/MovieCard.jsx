import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie} = this.props;
    return(
      <div>
        <section className="movie-card" key={movie.title}>
          <h4 className="movie-card-title">{movie.title}</h4>
          <img className="movie-card-image" src={movie.imagePath} alt={movie.title} />
        </section>
      </div>
    )
  }
}

export default MovieCard;