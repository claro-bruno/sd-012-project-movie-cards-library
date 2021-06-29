import React from 'react';
import './App.css';
import LibraryHeader from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <LibraryHeader />
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
