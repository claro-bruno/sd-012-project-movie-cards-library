import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>

        {
          movies.map((movie) => (
            <div key={ movie.title }>
              <MovieCard key={ movie.title } movie={ movie } />
            </div>))
        }

      </section>
    );
  }
}

export default MovieList;
