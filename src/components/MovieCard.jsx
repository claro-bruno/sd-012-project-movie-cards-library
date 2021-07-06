import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath } = movie;
    return (
      <section>
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5>{ subtitle }</h5>
      </section>
    );
  }
}

export default MovieCard;
