// implement Rating component here
import React from 'react';
import PropType from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section>
        <div className="rating">
          <p>{rating}</p>
        </div>
      </section>
    );
  }
}

Rating.propTypes = {
  rating: PropType.shape({
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
    rating: PropType.number.isRequired,
    imagePath: PropType.string.isRequired,
  }).isRequired,
};

export default Rating;
