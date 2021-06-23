// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';

// prettier-ignore
class Rating extends React.Component {
  render() {
    const { value } = this.props;
    return (
      <span>{ value }</span>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Rating;
