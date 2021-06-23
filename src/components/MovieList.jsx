import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />)}
      </div>
    );
  }
}

export default MovieList;
