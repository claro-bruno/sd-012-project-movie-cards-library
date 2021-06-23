import React, { Component } from 'react';
import Proptypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: Proptypes.arrayOf(Proptypes.object).isRequired,
};

export default MovieList;
