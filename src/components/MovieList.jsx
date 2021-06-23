// implement MovieList component here
import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const movies = this.props;
    return (
      <section className="movie-list">
        {movies.movies.map((movie) => {
          const { imagePath, title, subtitle, storyline, rating = 0 } = movie;
          return (<MovieCard
            imagePath={ imagePath }
            titleImg={ title }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
            key={ title }
          />);
        })}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
