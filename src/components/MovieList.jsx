import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        <h2>Movie List</h2>
        { movies.map((movie) => <MovieCard key={ movie.title } />)}
      </main>
    );
  }
}

export default MovieList;
