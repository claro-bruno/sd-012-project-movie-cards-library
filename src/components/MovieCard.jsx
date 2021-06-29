import React from 'react';

class MovieCard extends React.Component{
    render(){
        const { movie } = this.props;
        return (
            <div>
                <img src={ movie.imagePath } alt={ movie.title } />
            </div>
        );
    }
}

export default MovieCard;
