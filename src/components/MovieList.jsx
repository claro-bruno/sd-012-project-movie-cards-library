// implement MovieList component here
import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)
        }
      </section>
    );
  }
}
MovieList.propTypes = {
  movies: PropType.shape([{
    title: Proptype.string,
  }]).isRequired,
};
export default MovieList;
