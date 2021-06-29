// implement MovieList component here
import React from 'react';
import MoviCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie) => <MoviCard /> )
    )
  }
}