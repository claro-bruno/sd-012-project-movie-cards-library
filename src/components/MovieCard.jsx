import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title } = movie;
    return <div>{ title }</div>;
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string }).isRequired,
};

export default MovieCard;
