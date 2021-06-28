// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        const { title, subtitle, storyline, imagePath, rating } = movie;
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        storyline: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        imagePath: PropTypes.string.isRequired,
    }).isRequired,
};

export default MovieCard;