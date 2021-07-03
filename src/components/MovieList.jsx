import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// implement MovieList component here
// Referência: Bruno Augusto
class MovieList extends React.Component {
  render() {
    // está acessando o valor para cada filme.
    const { movies } = this.props;
    // pegou os dados que estava dentro de um array de objeto a gente interou nesse array um map e para cada elemento desse array a gente retornou o component MovieCard recebendo o titulo e as informações necessarias de cada filme.
    return (
      <div>
        {
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>
    );
  }
}
// estou verificando se o array movies é obrigatoriamente um array de objetos obriga
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// está exportando componente MovieList.
export default MovieList;
