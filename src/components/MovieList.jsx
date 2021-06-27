// implement MovieList component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        { movies }
      </section>
    );
  }
}

// Esse trecho foi retirado do código do colega Dayvid Ruan
// Fonte: https://github.com/tryber/sd-012-project-movie-cards-library/pull/54/commits/e64b58bc1fcb0895a2c4bb2754b184283ee0f687

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
