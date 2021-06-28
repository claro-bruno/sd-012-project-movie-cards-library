// implement MovieList component here
import React, { Component } from 'react';
import Moviecard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => <Moviecard movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;