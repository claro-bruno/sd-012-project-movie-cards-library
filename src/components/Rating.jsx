// implement Rating component here
import React from 'react';

class Rating extends React.Component {
  render() {
    // console.log('this.props ', this.props);
    const { rating } = this.props;
    return (
      <div>
        { rating }
      </div>
    );
  }
}

export default Rating;
