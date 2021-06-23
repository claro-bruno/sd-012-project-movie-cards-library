import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const {
      MovieInfo: { title, subtitle, storyline, imagePath } } = this.props;
    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </section>

    );
  }
}

export default MovieCard;

// title, subtitle, storyline, imagePath e rating
