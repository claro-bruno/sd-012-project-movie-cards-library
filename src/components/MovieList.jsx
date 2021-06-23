import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard'

class MovieList extends React.Component {
  render() {
    const { movies } = this.props
    return (
      <div>
        {movies.map((movie) => <MovieList key={movie}/>)}
      <MovieCard />
      </div>
    )
  }
}

export default MovieList;// implement MovieList component here
