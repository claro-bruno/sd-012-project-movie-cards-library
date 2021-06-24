import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = Object.values(this.props)[0];
    return (
      <div className="MovieList">
        {(movies).map((movie, index) => <MovieCard key={ index } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
