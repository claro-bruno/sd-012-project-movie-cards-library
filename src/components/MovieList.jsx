import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        {
          movies.map((show) => <MovieCard key={ show.storyline } shows={ show } />)
        }
      </section>
    );
  }
}

export default MovieList;
