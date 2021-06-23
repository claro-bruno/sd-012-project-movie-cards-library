// implement MovieList component here
import React from 'react';

class MoviesList extends React.Component {
  render() {
    const { movies } = this.props;
    return <section>{movies}</section>;
  }
}

export default MoviesList;
