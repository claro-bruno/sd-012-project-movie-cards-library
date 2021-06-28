import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList'
import Data from './data';

function App() {
  const movies = Data;

  return (
    <div className="App">
      <Header />
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
