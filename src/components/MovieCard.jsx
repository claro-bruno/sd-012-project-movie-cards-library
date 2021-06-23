import React from 'react';
import PropTypes from 'prop-types';

class MoveCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <section>
        <img src={ movies.imagePath } alt={ movies.title } />
        <h2>{ movies.title }</h2>
        <h4>{ movies.subtitle }</h4>
        <p>{ movies.storyline }</p>
        <div>
          { movies.rating}
        </div>
      </section>
    );
  }
}

MoveCard.propTypes = {
  movies: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MoveCard;
