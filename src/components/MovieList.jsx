import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
        }
      </section>
    );
  }
}

export default MovieList;
