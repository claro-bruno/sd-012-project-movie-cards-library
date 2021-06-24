import React from 'react';
// import propTypes from 'prop-types';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // const { moviesInfo } = this.props;
    return (
      <div>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movieInfo={ movie } />)
        }
      </div>
    );
  }
}

// MovieList.propTypes = {
//   moviesInfo: propTypes.shape({
//     title: propTypes.string,
//     subtitle: propTypes.string,
//     storyline: propTypes.string,
//     rating: propTypes.number,
//     imagePath: propTypes.string,
//   }).isRequired,
// };

export default MovieList;
