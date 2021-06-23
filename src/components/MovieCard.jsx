// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <ul>
        <img src={imagePath} alt={title} />
        <li>{title}</li>
        <li>{subtitle}</li>
        <li>{storyline}</li>
        <li>{rating}</li>
      </ul>);
  }
}

export default MovieCard;
