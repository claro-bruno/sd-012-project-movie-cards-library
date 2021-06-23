// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = (props) => {
  const { movies } = props;
  return (
    <ul>
      { movies.map((movie) => <MovieCard key={ movie.title } alt={ movie.title } />) }
    </ul>
  );
};

export default MovieList;
