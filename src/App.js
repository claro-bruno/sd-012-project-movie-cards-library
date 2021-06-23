import React from 'react';
import data from './data';
import MovieList from './components/MovieList';
import './App.css';

function App() {
  return (
    <div className="App">
      <MovieList movies={ data } />
    </div>
  );
}

export default App;
