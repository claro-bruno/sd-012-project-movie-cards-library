import React from 'react';
import PropType from 'prop-types';
import MovieList from './MovieList'


class MovieCard extends React.Component {
  render() {
    const { movies } = this.props
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies
    return(
      <div>
        <img src={movies.imagePath} alt={movies.title}/>
        <h4>{movies.title}</h4>
      </div>
    )
  }
}

export default MovieCard;// implement MovieCard component here
