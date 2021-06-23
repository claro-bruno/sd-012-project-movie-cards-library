import React from 'react';
import PropTypes from 'prop-types';

class Movies extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies[0].title }
      </div>);
  }
}

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
    }),
  ).isRequired,
};

export default Movies;
