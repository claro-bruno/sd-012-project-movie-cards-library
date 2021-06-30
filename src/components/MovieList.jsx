// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        <section>
          {movies.map((movie) => (
            <MovieCard key={ movie.title } movie={ movie } />))}
        </section>
      </main>
    );
  }
}

{/* `Movie Title ${indice + 1}` */}

export default MovieList;
