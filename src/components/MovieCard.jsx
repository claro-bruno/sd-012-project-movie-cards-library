import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends Component {
  render() {
    // const { movie } = this.props;

    return (
      <div>
        {/* <p>{ movie.title }</p>
        <p>{ movie.subtitle }</p>
        <p>{ movie.storyline }</p> */}
      </div>
    );
  }
}

MovieCard.protoTypes = {
  movie: PropTypes.object,
};
