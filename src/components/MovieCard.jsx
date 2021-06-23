// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath } = this.props.movie;
    // console.log(this.props.movie); // p eu ver o que vem.

    return (
      <div/*  className='movie-card' */>
        <div/*  className='movie-card-body' */>
          <h4/*  className= 'movie-card-title' */>{title}</h4>
          <h5/*  className='movie-card-subtitle' */>{subtitle}</h5>
          <p/*  className='movie-card-storyline' */>{storyline}</p>
        </div>
        <img src={ imagePath } alt="Capa do filme"/*  className='movie-card-image'  */ />
        {/* <Rating rating={rating} className='movie-card-rating' /> */}
      </div>
    );
  }
}

export default MovieCard;
