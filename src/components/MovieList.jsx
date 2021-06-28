import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (movies.map((Movie) => (<MovieCard
      className="movie-card"
      movie={ Movie }
      key={ Movie.title }
    />)));
  }
}
export default MovieList;
