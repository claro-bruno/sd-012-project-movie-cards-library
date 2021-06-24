import React from 'react';
import MovieCard from './MovieCard';

class Movielist extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <section className="movie-list">
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </section>
    );
  }
}

export default Movielist;
