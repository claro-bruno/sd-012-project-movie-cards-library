import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.shape([{
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }]).isRequired,
};

export default MovieList;
