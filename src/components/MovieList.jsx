import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const [movies] = this.props;
    return (
      <main>
        { movies.map((item) => <MovieCard key={ item.title } movies={ item } />) }
      </main>);
  }
}

export default MovieList;
