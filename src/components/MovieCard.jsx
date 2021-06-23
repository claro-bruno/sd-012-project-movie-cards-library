// implement MovieCard component here
import React from 'react';
import Rating from './Rating';
import PropTypes from 'prop-types';
class MovieCard extends React.Component {
    render() {

        const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
        return (

            <div className="movie-card">

                <img className="movie-card-image" src={imagePath} alt={`${title}`} />

                <div className="movie-card-body">

                    <h4 className="movie-card-title">{title}</h4>

                    <h5 className="movie-card-subtitle">{subtitle}</h5>

                    <p className="movie-card-storyline">{storyline}</p>
                </div>
                <Rating rating={rating} />
            </div>

        );

    }

}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        rating: PropTypes.number,
        imagePath: PropTypes.string,
    }).isRequired,
};
export default MovieCard;