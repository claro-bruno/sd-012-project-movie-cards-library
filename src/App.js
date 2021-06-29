import React from 'react';
import './App.css';
import MovieList from './components/MovieList';
import movies from './data';
import Header from './components/Header';

/**
 * Tive a ajuda do Bruno Augusto para revisar o código todo.
 */

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
