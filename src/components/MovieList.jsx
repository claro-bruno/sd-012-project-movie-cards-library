// implement MovieList component here
import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movieMap) => <MovieCard key={movieMap.title} movie={movieMap}/> )
    )
  }
}

MovieList.propTypes = {
  movies: PropType.shape({
    title: PropType.string,
    subtile: PropType.string,
    storyLine: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string
  })
}

export default MovieList;