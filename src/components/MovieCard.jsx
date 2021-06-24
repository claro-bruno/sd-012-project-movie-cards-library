// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    // console.log('this.props: ', this.props);
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <p>MovieCard</p>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}
export default MovieCard;
