import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props
        return (
            <section className=".movie-card">
             <img src={movie.imagePath} alt="movie banner" className="movie-card-image" />
             <div className="movie-card-body">
              <h4 className="movie-card-title">{movie.title}</h4>
              <h5 className="movie-card-subtitle">{movie.subtitle}</h5>
              <p className="movie-card-storyline">{movie.storyline}</p>
             </div>
             <Rating rating={movie.rating} className="movie-card-rating"/>   
            </section>
        )
    }
}

export default MovieCard