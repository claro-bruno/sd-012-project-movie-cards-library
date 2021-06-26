// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

// Validadores PropTypes para garanitir que o objeto tem chave e valor de tipos expecificos.
// ref= https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};
// Default caso a Prop não receba o tipo experado.
MovieList.defaultProps = {
  movies: {},
};

export default MovieList;
