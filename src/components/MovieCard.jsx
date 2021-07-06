import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath } = movie;
    return (
      <section>
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
      </section>
    );
  }
}

export default MovieCard;
