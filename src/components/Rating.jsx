import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rate } = this.props;
    return (
      <div className="rating">
        { rate }
      </div>
    );
  }
}

Rating.defaultProps = {
  rate: 3,
};

Rating.propTypes = {
  rate: PropTypes.number,
};

export default Rating;
