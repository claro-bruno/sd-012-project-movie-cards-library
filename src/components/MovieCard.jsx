import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props.movie;

    return (
      <section>
        <h1>{ title }</h1>
      </section>
    );
  }
}

export default MovieCard;
