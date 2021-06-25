import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    // console.log('this.props ', this.props);
    const { rating } = this.props;
    return <div className="rating">{ rating }</div>;
  }
}

Rating.defaultProps = {
  rating: 5,
};

Rating.propTypes = {
  rating: PropTypes.number,
};

export default Rating;
