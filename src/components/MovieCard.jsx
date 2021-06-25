import React from 'react';

class MovieCard extends React.Component {
  render() {
    const {movie} = this.props;
    return(
      <div>
        <section className="movie-card" key={movie.title}>
          <h4>{movie.title}</h4>
        </section>
      </div>
    )
  }
}

export default MovieCard;