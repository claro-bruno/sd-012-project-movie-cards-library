import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    // const { movieCardInfo } = this.props;
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath } = movie;
    return (
      <section>
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <img src={ imagePath } alt={ title } />
        <p>{storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
