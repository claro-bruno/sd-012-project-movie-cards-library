import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import list from './data';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={ list } />
    </div>
  );
}

export default App;
