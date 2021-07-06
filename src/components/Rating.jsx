import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        <p>{ rating }</p>
      </section>
    );
  }
}

export default Rating;
