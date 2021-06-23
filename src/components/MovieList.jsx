import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component{
    render(){
      const { movies } = this.props;
    return(
      <div>
        { movies.map((movie) => <MovieCard key={movie.title} movies={movie}/>) }
      </div>
    );
  }
}

export default MovieList;