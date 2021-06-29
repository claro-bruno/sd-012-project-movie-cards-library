// implement MovieList component here
import React from 'react';
import { render } from 'enzyme';
import movies from './data';

class MovieList extends React.Component {
  render() {
    return (
      <MovieList {this.props.movies} />
    );
  }
}

export default MovieList;
