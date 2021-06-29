// implement MovieList component here
import React from 'react';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        <section>
          {movies}
        </section>
      </main>
    );
  }
}

export default MovieList;
