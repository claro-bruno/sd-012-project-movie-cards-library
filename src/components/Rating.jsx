import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { rate } = this.props;
    return (<div>{rate}</div>);
  }
}

Rating.propTypes = {
  rate: PropTypes.number.isRequired,
};

export default Rating;
