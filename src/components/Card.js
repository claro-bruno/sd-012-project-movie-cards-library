import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class Card extends React.Component {
  render() {
    return (
      <div>
        {
          movies.map((movie) => <MovieCard key={ movie.id } movieInfo={ movie } />)
        }
      </div>
    );
  }
}

export default Card;
