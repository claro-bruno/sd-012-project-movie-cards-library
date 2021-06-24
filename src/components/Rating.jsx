// implement Rating component here
import React, { Component } from 'react';
import PropType from 'prop-types';

class Rating extends Component {
  render() {
    const rating = this.props;

    return (
      <section className="movie-card-rating">
        <p className="rating">{ rating.rating }</p>
      </section>
    );
  }
}

// Trecho feito com ajuda do Bruno Augusto
Rating.propTypes = {
  rating: PropType.oneOfType([PropType.string, PropType.number]),
};

Rating.defaultProps = {
  rating: 'Nao avaliado',
};

export default Rating;
