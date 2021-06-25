import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <p>
        { rating }
      </p>
    );
  }
}

export default Rating;
