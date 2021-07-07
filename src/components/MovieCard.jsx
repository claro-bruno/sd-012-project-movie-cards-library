import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
    render() {
        const { movieInfo } = this.props
        return (
            <section>
             <img src={movieInfo.imagePath} alt="movie banner" />
             <h4>{movieInfo.title}</h4>
             <h5>{movieInfo.subtitle}</h5>
             <p>{movieInfo.storyline}</p>
             <Rating rating={movieInfo.rating} />   
            </section>
        )
    }
}

export default MovieCard