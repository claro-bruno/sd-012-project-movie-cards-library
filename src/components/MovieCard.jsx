import React from 'react';
// import Card from './Card';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // movie = { title, subtitle, storyline, imagePath, rating }.
    return (
      <div>
        {/* <Card /> */}
        <h3>Movie Card</h3>
      </div>
    );
  }
}

export default MovieCard;
