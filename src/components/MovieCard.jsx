// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;
        const { title, subtitle, storyline, imagePath, rating } = movie;

        return (
            <div className='movie-card'>
                <div className='movie-card-body'>
                    <img className='movie-card-image' src={ imagePath } alt={ title } />
                    <h4 className='movie-card-title'>{ title }</h4>
                    <h5 className='movie-card-subtitle'>{ subtitle }</h5>
                    <p className='movie-card-storylin'>{ storyline }</p>
                </div>
            </div>
        );
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