import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
    render() {
        const movies = this.props.movies;

        return (
            <div className="movie-list">
                {movies.map(movie => <MovieCard key={movie.title} movie={movie} />)}
            </div>
        );
    }
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
    })).isRequired,
}

export default MovieList;