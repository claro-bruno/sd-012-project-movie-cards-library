// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <span className="rating">{ rating }</span>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 4.5,
};
export default Rating;
