import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <h4>{movieInfo.title}</h4>
        <h5>{movieInfo.subtitle}</h5>
        <p>{movieInfo.storyline}</p>
      </section>
    );
  }
}
MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
