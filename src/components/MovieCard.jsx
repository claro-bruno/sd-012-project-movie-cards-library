import React from 'react';

const { title, subtitle, storyline, rating, imagePath } = this.props.movie;

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
      </div>
    );
  }
}

export default MovieCard;
