// implement MovieList component here
import React, { Component } from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, index) => <MovieCard movie={ movie } key={ index } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object),
};

MovieList.defaultProps = {
  movies: [
    {
      title: 'Kingsglaive',
      subtitle: 'Final Fantasy XV',
      storyline: 'King Regis, steal the sacred crystal.',
      rating: 4.5,
      imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    },
    {
      title: 'Final Fantasy',
      subtitle: 'Spirits Within',
      storyline: 'A scientist alien phantoms.',
      rating: 4.5,
      imagePath: 'images/Final_Fantasy_Spirits_Within.jpg',
    }],
};

export default MovieList;
