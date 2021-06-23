import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;
  return (
    <section>
      {movies.map((e) => <MovieCard key={ e.title } movie={ e } />)}
    </section>
  );
}

export default MovieList;

