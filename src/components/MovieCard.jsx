import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ `movie: ${title}` } />
        <h1>{ title }</h1>
        <h3>{ subtitle }</h3>
        <h5>{ storyline }</h5>
        <h4>{ rating }</h4>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.exact([{
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }]).isRequired,
};

export default MovieCard;
