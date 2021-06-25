import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <section className="movie-card" key={ movie.title }>
          <img className="movie-card-image" src={ movie.imagePath } alt={ movie.title } />
          <h4 className="movie-card-title">{ movie.title }</h4>
          <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        </section>
      </div>
    );
  }
}

export default MovieCard;
