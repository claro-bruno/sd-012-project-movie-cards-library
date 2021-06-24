import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const {title, subtitle, imagePath } = movies;
    return (
      <main>
        <MovieCard filmes={ imagePath } />
      </main>);
  }
}

export default MovieList;
