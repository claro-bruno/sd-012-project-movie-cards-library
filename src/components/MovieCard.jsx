import React from 'react';
import propTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    console.log(this.props);

    return (
      <div>
        <h2>{ movieInfo.title }</h2>
        <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
        <h3>{ movieInfo.subtitle }</h3>
        <p>{ movieInfo.storyline }</p>
        <h3>{ movieInfo.rating }</h3>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    subtitle: propTypes.string,
    storyline: propTypes.string,
    rating: propTypes.number,
    imagePath: propTypes.string,
  }).isRequired,

};

export default MovieCard;
