import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

// O código deste arquivo foi parcialmente baseado no código desenvolvido na aula 11.2
class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section className="MovieList">
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(
    PropType.shape({
      title: PropType.string.isRequired,
      subtitle: PropType.string.isRequired,
      storyline: PropType.string.isRequired,
      imagePath: PropType.string.isRequired,
      rating: PropType.number.isRequired,
    }),
  ).isRequired,
};

export default MovieList;
