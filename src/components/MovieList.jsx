import React from 'react';
import MovieCard from './MovieCard';
import PropTypes from './propTypes';

class MovieList extends React.Component {
	render() {
		const { movies } = this.props;
		return (
			<section>
				{ movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
			</section>
		);
	}
}

export default MovieList;
