import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <p>{this.props.movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}</p>
      </section>
    );
  }
}

export default MovieList;
