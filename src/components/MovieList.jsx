import React, { Component } from 'react';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return movies.map((movie) => <MovieCard movie={ movie } />);
  }
}

export default MovieList;
