// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies[0].title);
    return (
      movies.map((movieMap) => <MovieCard key={movieMap.title} movie={movieMap}/> )
    )
  }
}

export default MovieList;