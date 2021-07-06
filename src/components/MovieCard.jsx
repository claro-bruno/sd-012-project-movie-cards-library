import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

export default MovieCard;
