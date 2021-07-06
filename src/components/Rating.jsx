// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
// import Rating from './Rating';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p>{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: 0,
};

export default Rating;
