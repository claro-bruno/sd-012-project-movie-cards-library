import React from 'react';
import PropTypes from 'prop-types';
class Rating extends React.Component {
    render() {
        return (<p className="rating">{this.props.rating}</p>);
    };
}

Rating.propTypes = {
    rating: PropTypes.number,
};

export default Rating;