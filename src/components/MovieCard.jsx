import React from 'react';

class MovieCard extends React.Component{
    render(){
        const { title, subtitle, storyline, imagePath } = this.props.movies;
        return(
            <div className='movieCard'>
                <img src={imagePath} />
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <p>{storyline}</p>
            </div>
        );
    }
}

export default MovieCard;