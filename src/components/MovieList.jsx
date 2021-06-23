import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
      {movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
      </div>
    );
  }
}

MovieList.propsType = {
  movies: PropTypes.arrayOf(PropTypes.object),
}

export default MovieList;
