// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    // receber o valor da avaliação do filme.
    const { rating } = this.props;
    return (
      // está preenchendo a informação da classifição do filme que é chamado de rating.
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

// verificação do rating é um numero.
Rating.propTypes = {
  rating: PropTypes.number,
};

// o valor padrão do rating é igual a 0.
Rating.defaultProps = {
  rating: 0,
};
export default Rating;
