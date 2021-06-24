// implement MovieCard component here
import React, { Component } from 'react';
import PropType from 'prop-types';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <div className="rating">{ rating }</div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    imagePath: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,

  }).isRequired,
};

export default MovieCard;
