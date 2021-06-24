// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="card card-aux">
        <img className="card-img-top" src={ imagePath } alt="Imagem de capa do card" />
        <div className="card-body">
          <h4 className="card-title">{ title }</h4>
          <h5 className="card-text">{ subtitle }</h5>
          <p>{ storyline }</p>
          <div className="d-flex justify-content-around">
            <span>{ rating }</span>
          </div>
        </div>
      </div>);
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
