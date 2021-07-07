import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <Header className="movie-card-header"/>
      <MovieList movies={movies} className="movie-list" />
    </div>
  );
}

export default App;
