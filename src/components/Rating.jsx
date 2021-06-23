import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="rating-movie-cards">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

export default Rating;
