import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, storyline } = movie;
    return (
      <div className="movie-card movie-card-body">
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    imagePath: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
  }).isRequired,
};

export default MovieCard;
