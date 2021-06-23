import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    const { MovieInfo: { rating } } = this.props;
    return <h1>teste Rating</h1>;
  }
}

Rating.propTypes = {
  MovieInfo: PropTypes.shape({
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default Rating;
