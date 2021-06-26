// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-rating">
          <span>Rating</span>
          <span className="rating">{ rating }</span>
      </section>
    );
  }
}

export default Rating;