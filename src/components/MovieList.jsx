import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

let oi = 'oi';
oi = 'teste';
console.log(oi);

export default class MovieList extends Component {

  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div>
        {movies.map((e) => (
          <MovieCard
            key={ e.title }
            movie={ e }
          />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// MovieList.propTypes = {
//   movies: PropTypes.shape([{
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.number,
//     imagePath: PropTypes.string,
//   }]).isRequired,
// };
