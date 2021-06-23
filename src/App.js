import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';

const rating = 4.5;
const ratingThree = 3;
const movies = [
  {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating,
    imagePath: '../images/Appleseed_Alpha.jpg',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'Movie Subtitle 2',
    storyline: 'Movie Storyline 2',
    rating,
    imagePath: '../images/Final_Fantasy_Spirits_Within.jpg',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'Movie Storyline 3',
    ratingThree,
    imagePath: '../images/Ghost_In_The_Shell_2_0.jpg',
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
