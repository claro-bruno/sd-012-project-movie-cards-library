import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <main>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </main>
    );
  }
}
export default MovieList;
