// implement Rating component here
import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">{ rating }</section>
    );
  }
}

export default Rating;
