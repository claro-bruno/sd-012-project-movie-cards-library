import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
        const list = this.props.movies;
        return (
            list.map((e, index) => <MovieCard key={index}/>)
        );
    };
}

export default MovieList;