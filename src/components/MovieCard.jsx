// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movieCard } = this.props;
    return (
      <section>
        <img src={ movieCard } alt="" />
      </section>
    );
  }
}

export default MovieCard;
