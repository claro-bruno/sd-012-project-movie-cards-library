import React from 'react';
import Header from './components/Header';
import MovieList from './components/MovieList';
import './App.css';
import catalog from './data';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={ catalog } />
    </div>
  );
}

export default App;
