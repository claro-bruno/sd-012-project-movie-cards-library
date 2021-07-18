import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((filmes) => (
          <MovieCard key={ filmes.title } movie={ filmes } />
        )) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
