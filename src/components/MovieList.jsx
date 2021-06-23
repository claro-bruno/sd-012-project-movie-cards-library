import React from 'react';
import MovieCard from './MovieCard';

const { movies } = this.props;

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.index } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
