import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((Movie) => (
          <MovieCard className="movie-card" movie={ Movie } key={ Movie.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
