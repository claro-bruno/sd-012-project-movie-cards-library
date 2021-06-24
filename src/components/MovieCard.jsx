import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { shows } = this.props;
    return (
      <section>
        <h1>{shows.title}</h1>
        <img src={ shows.imagePath } alt={ shows.title } />
        <p>shows.genrer</p>
      </section>
    );
  }
}

export default MovieCard;
