import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="rating">
        <p>{ rating }</p>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};
Rating.defaultProps = { // isso define um valor default
  rating: 0,
};

export default Rating;
