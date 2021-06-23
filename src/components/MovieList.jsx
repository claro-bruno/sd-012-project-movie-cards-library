import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie, index) => (
          <MovieCard movie={ movie } index={ index } key={ movie.title } />
        ))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       subtitle: PropTypes.string,
//       storyline: PropTypes.string,
//       imagePath: PropTypes.string,
//       rating: PropTypes.number,
//     }),
//   ),
// };

MovieList.defaultProps = {
  movies: [{}],
};

export default MovieList;
