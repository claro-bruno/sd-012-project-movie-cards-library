import React from 'react';
import movies from './data';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList movies={ movies } />
    </div>
  );
}

export default App;
