// implement MovieList component here
import React from 'react';
import data from '../data';
import MovieCard from './MovieCard';

// prettier-ignore
class MovieList extends React.Component {
  render() {
    return data.map((item) => <MovieCard key={ item.title } obj={ item } />);
  }
}

export default MovieList;
