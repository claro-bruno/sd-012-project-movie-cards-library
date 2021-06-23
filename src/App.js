import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movieList from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movieList} />
    </div>
  );
}

export default App;
