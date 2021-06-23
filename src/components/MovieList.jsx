// implement MovieList component here
import React from 'react';
// import './src/App.css';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      <div/* className='movie-list' */>
        {this.props.movies.map(movie => <MovieCard movie={ movie } key={ movie.id } />)}
      </div>
    );
  }
}

export default MovieList;
