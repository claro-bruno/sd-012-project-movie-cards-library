// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <>
        <div>
          <p>Rating :</p>
        </div>
        <div>
          <p className="rating">{ rating }</p>
        </div>
      </>
    );
  }
}

// Validadores PropTypes para garanitir que o objeto tem chave e valor de tipos expecificos.
// ref= https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
Rating.propTypes = {
  rating: PropTypes.number,
};
// Default caso a Prop não receba o tipo experado.
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
