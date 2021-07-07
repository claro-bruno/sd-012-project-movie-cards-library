import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
    renders() {
        const { movie } = this.props
        return (
            <section>
             <img src={movie.imagePath} alt="movie banner" />
             <h4>{movie.title}</h4>
             <h5>{movie.subtitle}</h5>
             <p>{movie.storyline}</p>
             <Rating rating={movie.rating} />   
            </section>
        )
    }
}

export default MovieCard