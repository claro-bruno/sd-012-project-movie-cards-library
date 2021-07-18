import PropType from 'prop-types';
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div>
        <img src={ imagePath } alt="imagem" />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <div>
          <p>{ rating }</p>
        </div>
      </div>
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
