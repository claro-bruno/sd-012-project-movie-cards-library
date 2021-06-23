import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {data.map((mv) => (
          <MovieCard movies={ mv } key={ mv.title } />
        ))}
      </section>
    );
  }
}
export default MovieList;
