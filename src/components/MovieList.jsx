import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <div>
          { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
        </div>
      </section>
    );
  }
}
MovieList.propTypes = PropTypes.array.isRequired;
export default MovieList;
