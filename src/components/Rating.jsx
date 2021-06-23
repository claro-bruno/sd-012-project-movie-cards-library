import PropTypes from 'prop-types';
import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{rating}</p>
    );
  }
}
// Rating.defaultProps = {
//   movie: PropTypes.objectOf(PropTypes.object),
//   rating: PropTypes.number,
// };

// Rating.propTypes = {
//   movie: PropTypes.objectOf(PropTypes.object),
//   rating: PropTypes.number,
// };

export default Rating;
