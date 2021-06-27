// implement MovieCard component here
import React, {Component} from 'react';

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div>
        <li>Title: {movie.title}</li>
        <img src={movie.imagePath} alt={movie.title}/>
        <p>Synopsis: {movie.storyline}</p>
      </div>
    )
  }
}

export default MovieCard;