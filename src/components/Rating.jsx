import React from 'react';

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

export default Rating;
