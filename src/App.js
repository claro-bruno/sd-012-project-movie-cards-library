import React from 'react';
import './App.css';
import Header from './components/Header';
import movies from './data';
import MovieList from './components/MovieList';

function App() {
  return (
    <main className="App">
      <Header />
      <MovieList movies={ movies } />
    </main>
  );
}

export default App;
