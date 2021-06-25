import React from 'react';

class Rating extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{movie.rating}</p>
      </div>
    );
  }
}

export default Rating;
