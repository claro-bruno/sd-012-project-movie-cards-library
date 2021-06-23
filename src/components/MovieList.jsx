import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <main>
        { movies.map((elm) => <MovieCard key={ elm.title } movie={ elm } />) }
      </main>
    );
  }
}

// MovieList.defaultProps = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object),
// };

export default MovieList;
