// implement MovieCard component here
import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        <div className="movie-card">
          <img className="movie-card-image" src={ movies.imagePath } alt="" />
          <main className="movie-card-body">
            <h2 className="movie-card-title">{movies.title}</h2>
            <p className="movie-card-subtitle">{movies.subtitle}</p>
            <p className="movie-card-storyline">{movies.storyline}</p>
            <div className="movie-card-rating">
              <p>Rating</p>
              <p className="rating">{movies.rating}</p>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  rating: PropTypes.number,
  imagePath: PropTypes.string,
};

export default MovieCard;
