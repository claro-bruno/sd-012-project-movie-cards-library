import React, { Component } from 'react';
import MovieCard from './MovieCard';

export default class MovieList extends Component {
  render() {
    const rating = 4.5;
    const ratingThree = 3;
    const movies = [
      {
        title: 'Movie Title 1',
        subtitle: 'Movie Subtitle 1',
        storyline: 'Movie Storyline 1',
        rating,
        imagePath: 'images/movie_1',
      },
      {
        title: 'Movie Title 2',
        subtitle: 'Movie Subtitle 2',
        storyline: 'Movie Storyline 2',
        rating,
        imagePath: 'images/movie_2',
      },
      {
        title: 'Movie Title 3',
        subtitle: 'Movie Subtitle 3',
        storyline: 'Movie Storyline 3',
        ratingThree,
        imagePath: 'images/movie_3',
      },
    ];

    return (
      <div>
        {movies.map((e) => (
          <MovieCard
            key={ e.title }
            movie={ e }
            title={ e.title }
            subtitle={ e.subtitle }
            storyline={ e.storyline }
          />
        ))}
      </div>
    );
  }
}
