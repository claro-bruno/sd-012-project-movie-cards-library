import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

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
  movieInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagePath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default MovieCard;
