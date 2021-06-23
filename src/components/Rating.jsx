import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return <span>{ rating }</span>
  }
}

export default Rating;
