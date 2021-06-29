// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const movies = this.props;

    return (
      <main>
        <section>
          {[movies].map((movie, indice) => (
            <MovieCard key={ `Movie Title ${indice + 1}` } src={ movie.imagePath } />))}
        </section>
      </main>
    );
  }
}

export default MovieList;
