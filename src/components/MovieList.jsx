import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <ul>
          { movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />) }
        </ul>
      </section>
    );
  }
}

MovieList.propTypes = PropTypes.array.isRequired;

export default MovieList;
