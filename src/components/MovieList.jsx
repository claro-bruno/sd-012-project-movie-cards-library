// implement MovieList component here
import React from 'react';
import { arrayOf, objectOf } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="movie-list">
        { movies.map((elmnt) => <MovieCard key={ elmnt.title } movie={ elmnt } />) }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: arrayOf(objectOf).isRequired,
};

export default MovieList;
