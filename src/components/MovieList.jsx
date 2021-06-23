import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    const { title, subtitle, storyline, imagePath, rating } = this.props.movies
    return (
      <div>
        {this.props.movies.map((movie) => <MovieCard key={movie.title} movies={ movie }/>)}
      <MovieCard />
      </div>
    )
  }
}

export default MovieList;// implement MovieList component here
