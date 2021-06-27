import React, { Component } from 'react';

class Rating extends Component {
  render() {
    return (
      <div className="movie-card-rating">
        <span className="rating">{this.props.rating}</span>
      </div>
    );
  }
}

export default Rating;
