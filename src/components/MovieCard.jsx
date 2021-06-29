import React from 'react';
import PropType from 'prop-types';

// O código deste arquivo foi parcialmente baseado no código desenvolvido na aula 11.2
class MovieCard extends React.Component {
  render() {
    const { card } = this.props;
    return (
      <section>
        <h4>{card.title}</h4>
        <h5>{card.subtitle}</h5>
        <p>{card.storyline}</p>
      </section>
    );
  }
}

MovieCard.propTypes = {
  card: PropType.shape({
    title: PropType.string.isRequired,
    subtitle: PropType.string.isRequired,
    storyline: PropType.string.isRequired,
  }).isRequired,
};

export default MovieCard;
