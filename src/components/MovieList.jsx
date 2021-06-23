import React from 'react';
import MovieCard from './MovieCard';
import PropsType from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div>
      {movies.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
      </div>
    );
  }
}

MovieList.propsType ={

}

export default MovieList;
