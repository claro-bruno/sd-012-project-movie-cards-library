import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
// import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        {
          movies.map((e) => <MovieCard key={ e.title } />)
        }
      </section>
    );
  }
}

MovieList.propTypes = {
  // movies: PropTypes.arrayOf(PropTypes.exact({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
}.isRequired;
export default MovieList;
