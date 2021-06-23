import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class movieList extends React.Component {
  render() {
    const { movies } = this.props;
    const Movies = movies.map((item) => <MovieCard key={ item.title } movie={ item } />);
    return (
      <main>
        { Movies }
      </main>
    );
  }
}

movieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default movieList;
