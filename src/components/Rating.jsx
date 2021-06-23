import React from 'react';
import PropType from 'prop-types'

class Rating extends React.Component {
    render() {
    const { rating } = this.props;
    return(
      <p>{ rating }</p>
    );
  }
}

Rating.propType = {
    rating: PropType.number.isRequired,
}

export default Rating;
