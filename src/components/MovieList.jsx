// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
// import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {
          movies.map((movi) => <MovieCard key={ movi.title } movie={ movi } />)
        }
      </div>
    );
  }
}

export default MovieList;
