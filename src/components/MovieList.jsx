/* eslint-disable react/prop-types */
// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { movies } = this.props;
    return (
      <div>
        {
          // eslint-disable-next-line react/jsx-key
          // eslint-disable-next-line react/prop-types
          // eslint-disable-next-line react/jsx-key
          movies.map((movieC) => <MovieCard key={ movieC.title } movieCard={ movieC } />)
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
export default MovieList;
