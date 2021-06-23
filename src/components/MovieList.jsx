import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
    render() {
        const movieList = this.props.movies;
        return (
            <section>
                {movieList.map((movie) => <MovieCard key={movie.title} movie={movie}/>)}
            </section>
        );
    };
}

export default MovieList;