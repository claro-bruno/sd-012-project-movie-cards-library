// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    // console.log(this.props.movie);

    return (
      <div/*  className='movie-card' */>
        <div/*  className='movie-card-body' */>
          <h4/*  className= 'movie-card-title' */>{ title }</h4>
          <h5/*  className='movie-card-subtitle' */>{ subtitle }</h5>
          <p/*  className='movie-card-storyline' */>{ storyline }</p>
        </div>
        <img src={ imagePath } alt="Capa do filme"/*  className='movie-card-image'  */ />
        {/* <Rating rating={rating} className='movie-card-rating' /> */}
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
