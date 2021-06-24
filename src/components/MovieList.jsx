// implement MovieList component here
import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    console.log(movies);

    return (
      <section className="movie-list">
        {
          movies.map((item, index) => (
            <MovieCard movie={ item } key={ movies[index].title } />))
        }
      </section>);
  }
}

// Trecho feito com ajuda do Bruno Augusto
MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
