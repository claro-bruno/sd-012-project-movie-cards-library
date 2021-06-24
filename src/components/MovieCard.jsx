import React from 'react';

class MovieCard extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.filmes.imagePath} alt={this.props.filmes.title} />
      </div>
    );
  }
}
export default MovieCard;
