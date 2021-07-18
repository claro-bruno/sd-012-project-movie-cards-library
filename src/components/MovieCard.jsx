// implement MovieCard component here
import React, {Component} from 'react';
import Rating from './Rating';

class MovieCard extends Component {
    render() {
        const { title, subtitle, storyline, rating, imagePath } = this.props.movie;
        return (
            <section>
                <img src={ imagePath }></img>
                <h4>{ title }</h4>
                <h5>{ subtitle }</h5>
                <p>{ storyline }</p>
                <Rating rating={ rating }/>
            </section> 
        )
    }
}

export default MovieCard;
