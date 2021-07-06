// implement MovieCard component here
import React from 'react';

class MoviesList extends React.Component {
  render() {
    const { movie } = this.props;
    const { rating } = this.props;
    <section>
      <h4>{ movie.title }</h4>
      <h5>{ movie.subtitle }</h5>
      <p>{ movie.storyline }</p>
      <img src={ movie.imagePath } alt={ movie.title } />
      <Rating rating={ movie.rating } />
    </section>;
  }
}
