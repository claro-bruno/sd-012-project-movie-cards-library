import React from 'react';
import catalog from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {
          catalog.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />)
        }
      </section>
    );
  }
}

export default MovieList;
