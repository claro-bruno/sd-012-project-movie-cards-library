// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return(
      <section>
        <img src={movie.imagePath} alt="Final Fantasy XV: KingsGlaive" />
      </section>
    )
  }
}

export default MovieCard;