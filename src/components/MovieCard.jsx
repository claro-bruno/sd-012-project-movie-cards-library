// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return(
      <section>
        <img src={movie.imagePath} alt="Final Fantasy XV: KingsGlaive" />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
      </section>
    )
  }
}

export default MovieCard;