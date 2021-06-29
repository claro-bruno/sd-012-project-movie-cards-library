// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const src = this.props;
    return (
      <div>
        <img src={ src } alt="imagem do filme" />
      </div>
    );
  }
}

export default MovieCard;
