// implement Rating component here
// implement Rating component here
import React from 'react';
import PropTypes from 'prop-types';
class Rating extends React.Component {
    render() {
        const { rating } = this.props;

        return (
            <div className="movie-card-rating">
                <p className="rating">{rating}</p>
            </div>
        );
    }
}
Rating.proTypes = {
    rating: PropTypes.number,
};
Rating.defultProps = {
    rating: 0,
};
export default Rating;