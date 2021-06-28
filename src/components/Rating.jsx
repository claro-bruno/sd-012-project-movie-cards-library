import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return <span className="rating">{ rating }</span>;
  }
}

// Para resolver erro no teste: 'rating undefined' consultei sobre Valores Padrão de Props em:
// https://pt-br.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper
Rating.defaultProps = {
  rating: 0,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
