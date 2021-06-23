import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from 'prop-types';
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

MovieList.propTypes = {
    movie: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
    })),
};

export default MovieList;