// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    //     const { movieList } = this.props;
    return (
      <section>
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    );
    //       <section>
    //         <h4>{movieList.title}</h4>
    //         <h5>{movieList.subtitle}</h5>
    //         <p>{movieList.storyline}</p>
    //         <h3>{movieList.rating}</h3>
    //         <img src={ movieList.imagePath } alt={ movieList.title } />
    //       </section>
    //     );
  }
}
export default MovieList;
