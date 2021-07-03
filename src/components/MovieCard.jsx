// implement MovieCard component here
// Referência: Bruno Augusto
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // estou recebendo as informções do movie list cada filme
    const { movie } = this.props;
    /* estou preenchendo h4, h5, p e imagem com as informações da props recebida */
    return (
      <div>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        {/* estou renderizando o componente Rating com a prop rating */}
        <Rating rating={ movie.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  // verificando os tipos do array movie.
  movie: PropTypes.shape({
    // verifica se a imagePath é uma string.
    imagePath: PropTypes.string,
    // verifica se o title é uma string.
    title: PropTypes.string,
    // verifica se o subtitle é uma string.
    subtitle: PropTypes.string,
    // verifica se a sinopse é uma string.
    storyline: PropTypes.string,
    // verifica se o rating é uma string ou numero e todos são obrigatorios.
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};
// exportando o meu component MovieCard.
export default MovieCard;
