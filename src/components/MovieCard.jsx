import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieInfo } = this.props;
    return (
      <section>
        <div>
          <img src={ movieInfo.imagePath } alt={ movieInfo.title } />
          <h4>{ movieInfo.title }</h4>
          <h5>{ movieInfo.subtitle }</h5>
          <p>{ movieInfo.storyline }</p>
        </div>
        <div>
          <Rating rating={ movieInfo.rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movieInfo: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })
};

export default MovieCard;
