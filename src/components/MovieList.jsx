import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component{
    render(){
        const { Movies } = this.props;
        return ( 
          Movies.map((item) =>  <MovieCard AllMovies={item} />)
        )
    }
}

export default MovieList;
