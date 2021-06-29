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
          movies.map((card) => <MovieCard key={ card.title } card={ card } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.shape([]).isRequired,
};

export default MovieList;
