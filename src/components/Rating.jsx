import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <p className="rating">{rating}</p>
      </section>
    );
  }
}

Rating.propTypes = { rating: PropType.number }.isRequired;

export default Rating;
