import React from 'react';

class MovieList extends React.Component {
  render() {
    const { MovieListInfo } = this.props

    return (
      <MovieList>
      </MovieList>
    )
  }
}

MovieList.propTypes = {
  MovieListInfo: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.string,
    imagePath: PropType.string,
  })
};

export default MovieList;