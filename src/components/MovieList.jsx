import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    return (
      <section className="movie-list">
        {
          movies.map(
            (movie) => (
              <MovieCard
                className="movie-card-body"
                key={ movie.id }
                MovieInfo={ movie }
              />
            ),
          )
        }
      </section>);
  }
}

export default MovieList;
