// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />)
        }
      </section>
    );
  }
}

export default MovieList;
