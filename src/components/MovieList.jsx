import React from 'react';
import MovieCard from './MovieCard';
class MovieList extends React.Component {
    render() {
        const { movies } = this.props;

        return (
            <div className="movie-list">
                {
                    movies.map((movie, index) => (
                        <MovieCard key={movies[index].title} movie={movie} />
                    ))
                }
            </div>
        );

    }
}
export default MovieList;