/* eslint-disable react/prop-types */
// implement MovieList component here
import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {
          // eslint-disable-next-line react/jsx-key
          // eslint-disable-next-line react/prop-types
          // eslint-disable-next-line react/jsx-key
          movies.map((movieC) => <MovieCard key={ movieC.title } movie={ movieC } />)
        }
        {/* <MovieCard movieCard={ movies[0] } />
        <MovieCard movieCard={ movies[1] } />
        <MovieCard movieCard={ movies[2] } />
        <MovieCard movieCard={ movies[3] } />
        <MovieCard movieCard={ movies[4] } /> */}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropType.shape([{
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  }]).isRequired,
};
export default MovieList;
