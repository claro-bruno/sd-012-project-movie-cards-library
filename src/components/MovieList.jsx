import React from 'react';
import { array } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)
        }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: array.shape,
};

MovieList.defaultProps = ['object'];

export default MovieList;
