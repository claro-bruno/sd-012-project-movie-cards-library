import React from 'react';
import Movie from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {Movie.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
