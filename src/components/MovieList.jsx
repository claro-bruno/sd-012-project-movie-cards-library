import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((item) => <MovieCard key={ item.title } movie={ item } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    imagePath: PropType.string,
  })).isRequired,
};

export default MovieList;
