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
          movies.map((cards) => <MovieCard key={ cards.title } movie={ cards } />)
        }
      </section>
    );
  }
}
MovieList.propTypes = {
  movies: PropType.shape([{
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    imagePath: PropType.string.isRequired,
  }]).isRequired,
};
export default MovieList;
