import React from 'react';
import MovieCard from '../components/MovieCard';

class MovieList extends React.Component {
  render() {
      const { movies } = this.props;
    return ( 
      <section>
      {
        movies.map((movie) => <MovieCard key={movie.title} MovieInfo={movie} />)
      }
      </section>
    )
  }
};

export default MovieList;
