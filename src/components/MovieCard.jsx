import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
    render() {
        const { movieCardInfo } = this.props;
        const { movie } = this.props;
        const { title, subtitle, storyline, imagePath, rating } = movie;
        return (
            <section>
                <h2>{movie.title}</h2>
                <h3>{movie.subtitle}</h3>
                <img src={movie.imagePath} alt={movie.title} />
                <h4>{movie.storyline}</h4>
            </section>
        )
    }
}

MovieCard.propTypes = {
    movieCardInfo: PropTypes.shape({
        title: PropTypes.string,
        subtitle: PropTypes.string,
        storyline: PropTypes.string,
        imagePath: PropTypes.string,
    })
};

export default MovieCard;