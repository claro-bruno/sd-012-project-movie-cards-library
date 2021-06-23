// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <section>
        <div>
          <MovieCard />
        </div>
      </section>
    );
  }
}

export default MovieList;
