import React from 'react';
import './App.css';
import data from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
