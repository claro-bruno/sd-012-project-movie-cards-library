// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, imagePath, rating } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ subtitle } />
        <h2>{title}</h2>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <p>{rating}</p>
      </section>
    );
  }
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imagePath: PropTypes.string.isRequired,
};

export default MovieCard;
