import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import '../App.css';
import Rating from './Rating';


class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movies;
    return(
      <li classname="movie-card">
        <img classname="movie-card-image" src={ imagePath } alt={ title }/>
        <h4 className="movie-card-title">{ title }</h4>
        <h5 classaname="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </li>
    )
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;// implement MovieCard component here
