// implement MovieList component here
import React from 'react';
import moviesList from '../data';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {moviesList.map((movie) => <MovieCard key={ movie.rating } movies={ movie } />)}
      </section>
    );
  }
}

export default MovieList;
