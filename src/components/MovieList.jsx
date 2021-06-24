// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const movieList = movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
    return (
      <div>
        <p>{movieList}</p>
      </div>
    );
  }
}
export default MovieList;
