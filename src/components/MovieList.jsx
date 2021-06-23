import React from 'react';
import PropTypes from 'prop-types';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return <main>{ movies }</main>;
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
