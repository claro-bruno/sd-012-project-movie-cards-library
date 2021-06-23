// implement MovieList component here
import React from 'react';
import moviesList from '../data';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {moviesList.map((filme) => <MovieCard key={ filme.rating } movie={ filme } />)}
      </section>
    );
  }
}

export default MovieList;
