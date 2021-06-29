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
            <div key={ indice }>
              <MovieCard src={ movie.imagePath } />
            </div>))}
        </section>
      </main>
    );
  }
}

export default MovieList;
