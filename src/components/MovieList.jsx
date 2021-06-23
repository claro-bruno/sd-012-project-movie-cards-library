// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const movieList = 'movie-list';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className={ movieList }>
        {
          movies.map((list) => <MovieCard movie={ list } key={ list.title } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
