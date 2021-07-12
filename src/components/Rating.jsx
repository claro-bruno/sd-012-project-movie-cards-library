// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    
    return (
      <p className="rating">{ rating }</p>
    );
  }
}

export default Rating;
