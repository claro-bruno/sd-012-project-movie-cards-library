// implement Rating component here

import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

// Tinha dado erro no propType de cima e acusava que tinha que ter um valor default do rating e indicava a documentação: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md   Onde indicava a utilização do defaultProps abaixo.
Rating.defaultProps = {
  rating: 0,
};

export default Rating;
