import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { MovieInfo } = this.props;
    return ( 
      <section>
        <img src={MovieInfo.imagePath} alt={MovieInfo.title} />
        <h4>{MovieInfo.title}</h4>
        <h5>{MovieInfo.subtitle}</h5>
        <p>{MovieInfo.storyline}</p>
      </section>
    )
    }
}

export default MovieCard;